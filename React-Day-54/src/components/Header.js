import { SITE_LOGO } from "../utils/constants.js"

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={SITE_LOGO} alt="log"></img>
            </div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Services</li>
                    <li>Top Offers</li>
                    <li>my card</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;