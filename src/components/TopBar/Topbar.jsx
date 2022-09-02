import ConnectButton from "../ConnectButton/ConnectButton"
import Logo from "../Logo/Logo"
import "./Topbar.scss";


const TopBar = ({}) => {
    return (
        <header className="topbar flex align-center">
            <Logo />
            <ConnectButton className="ml-auto"/>
        </header>
    )
}

export default TopBar;