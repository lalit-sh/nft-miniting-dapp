import { NFT_NAME } from "../../config/config"
import "./Logo.scss";

const Logo = () => {
    return (
        <div className="brand-logo">
            {NFT_NAME}
        </div>
    )
}

export default Logo;