import { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { StyledButton, StyledSection, StyleTitle } from '../StyledComponents/StyledComponents';
import { DISPLAY_COST, NETWORK, MAX_SUPPLY } from "../../config/config";
import { useSelector, useDispatch } from "react-redux";
import "./MintModal.scss";
import { setFlashMessage } from '../../redux/flashMessage/flashMessage.action';
import { fetchData } from "../../redux/data/data.actions";
import Spinner from "../../components/Spinner/Spinner";
import * as CONFIG from "../../config/config";
import BigNumber from "bignumber.js";

const MintModal = ({
    isOpen = false,
    onToggle,
}) => {
    const d = useDispatch();
    const [count, setCount] = useState(1);
    const { totalSupply, blockchain } = useSelector(s => ({
        totalSupply: s.data.totalSupply,
        blockchain: s.blockchain
    }));
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState();



    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = new BigNumber(String(cost * count));
        let totalGasLimit = String(gasLimit * count);
        setFlashMessage({ type: "info", message: `Minting your ${CONFIG.NFT_NAME}...` })(d);
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(blockchain.account, count)
            .send({
                gasLimit: String(totalGasLimit),
                to: CONFIG.CONTRACT_ADDRESS,
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                // console.log("err", err);
                setFlashMessage({ type: "error", message: err?.message  || "Sorry, something went wrong please try again later." })(d);
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFlashMessage({ type: "success", message: `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.` })(d);
                setClaimingNft(false);
                d(fetchData(blockchain.account));
            });
    };


    return (
        <Modal
            isOpen={isOpen}
            toggle={() => onToggle(false)}
            centered={true}
            className="mint-modal"
        >
            <ModalBody>
                <span className='close' onClick={() => onToggle(false)}>x</span>
                <StyleTitle className='mb-30'>
                    Mint Now
                </StyleTitle>
                <StyledSection className='co mb-30'>
                    <button className="sub-btn" onClick={() => setCount(count - 1 || 1)}>
                        -
                    </button>
                    <span className='count'>{count}</span>
                    <button className='sub-btn' onClick={() => (count <= 4 && setCount(count + 1))}>
                        +
                    </button>
                </StyledSection>
                <StyledButton className='mb-10' onClick={claimNFTs}>
                    {claimingNft && <Spinner containerWidth={"100%"} containerHeight={"100%"} /> ||
                        `Mint for ${count * DISPLAY_COST} ${NETWORK.NAME}`
                    }
                </StyledButton>
                <StyledSection>
                    {totalSupply} / {MAX_SUPPLY}
                </StyledSection>
            </ModalBody>
        </Modal>
    )
}

export default MintModal;