import { useState } from "react";
import TopBar from './components/TopBar/Topbar';
import { NFT_NAME } from "./config/config";
import MintButton from "./components/MintButton/MintButton";
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import { StyleTitle,
    StyleTitleLogo,
    StyledSection,
    StyledContainer 
} from "./components/StyledComponents/StyledComponents";
import { useEffect } from 'react';
import { connect, hasCachedProvider } from './redux/blockchain/blockchain.actions';
import { fetchData } from "./redux/data/data.actions";
import { useDispatch, useSelector } from "react-redux";
import ConnectButton from './components/ConnectButton/ConnectButton';
import Notification from './components/Notification';
import './App.scss';
import { clearFlashMessage } from "./redux/flashMessage/flashMessage.action";
import MintModal from "./components/MintModal/MintModal";


const App = () => {
    const d = useDispatch();
    const { connected, account, smartContract, error, flashMessage } = useSelector(s => ({
        connected: s.blockchain.connected, 
        account: s.blockchain.account,
        smartContract: s.blockchain.smartContract,
        error: s.blockchain.errorMsg || s.data.errorMsg,
        flashMessage: s.flashMessage
    }));
    const [notification, setNotification] = useState();

    const getData = () => {
        if (account !== "" && smartContract !== null) {
            d(fetchData(account));
        }
    };

    useEffect(() => {
        if(hasCachedProvider()){
            connect()(d);
        }
    }, [])

    useEffect(() => {
        getData();
    }, [account]);
    
    useEffect(() => {
        // this should be removed and all errors should be set to flash message directly from
        // within action only
        // keeping to support backward compatibilty with old code
        if(error && !notification){
            setNotification({
                type: "error", 
                title: error
            });
        }else if (!error && notification){
            setNotification(null);
        }
    }, [error])

    useEffect(() => {
        // once backward compatibilty code above will be no logger required
        // we can get rid of this as effect as well and can 
        // fetch flashMessage directly within FlashMessage component to show flash messages
        setNotification(flashMessage);
    }, [flashMessage])

    return (
        <StyledContainer>
            <TopBar />
            <AnimatedBackground>
                <div className='main'>
                    <StyledSection className='left'>
                        <img 
                            src={"/images/nft.gif"} 
                            width={"100%"} 
                            height={"100%"} 
                            style={{borderRadius: 10, maxHeight: 350, maxWidth: 350}}
                        />
                    </StyledSection>
                    <StyledSection className='right'>
                        {/* <StyleTitle>
                            Get Skulls with
                        </StyleTitle> */}
                        <StyleTitleLogo>
                            {NFT_NAME}
                        </StyleTitleLogo>
                        {(connected && account) ? 
                            <MintModal /> 
                            : <ConnectButton />
                        }
                    </StyledSection>
                    <StyledSection className='mob-bottom'>
                        <img 
                            src={"/images/nft.gif"} 
                            width={"100%"} 
                            height={"100%"} 
                            style={{borderRadius: 10, maxHeight: 350, maxWidth: 350}}
                        />
                    </StyledSection>
                </div>
            </AnimatedBackground>
            <Notification data={notification} />
        </StyledContainer>
    );
}

export default App;
