import { useState } from "react";
import MintModal from "../MintModal/MintModal";
import { StyledButton } from "../StyledComponents/StyledComponents";


const MintButton = ({
    className
}) => {

    const [ mintModal, setMintModal ] = useState(false);


    return (
        <>
            <StyledButton 
                className={`btn btn-primary mint-button ${className}`} 
                onClick={() => setMintModal(true)}
            >
                Mint NFT
            </StyledButton>
            <MintModal 
                isOpen={mintModal}
                onToggle={setMintModal}
            />
        </>
    )
}

export default MintButton;