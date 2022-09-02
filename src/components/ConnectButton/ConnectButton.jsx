import { StyledButton } from "../StyledComponents/StyledComponents";
import { connect, disconnect } from "../../redux/blockchain/blockchain.actions";
import { useDispatch, useSelector } from "react-redux";
import "./ConnectButton.scss";
import { useEffect, useState } from "react";

const ConnectButton = ({
    className=""
}) => {
    const d = useDispatch();
    const { 
        connected,
        account
    } = useSelector(s => ({
        connected: s.blockchain.connected,
        account: s.blockchain.account
    }));
    const [isConnected, setIsConnected] = useState(connected);
    let displayAccount = account ? account.slice(0,5) + '...' + account.substr(account.length - 4) : ''

    useEffect(() => {
        setIsConnected(connected);
    }, [connected, account])

    const label = isConnected ? `Disconnect` : "Connect Wallet"
    const action = isConnected ? disconnect : connect
    return (
        <StyledButton className={`btn btn-primary ${className}`} onClick={() => action()(d)}>
            <span>{displayAccount}</span>
            <span>{label}</span>
        </StyledButton>
    )
}

export default ConnectButton;