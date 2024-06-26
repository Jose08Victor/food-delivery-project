import "./styles.css"
import {assets} from "../../assets/assets"

export const NavBar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={assets.logo} alt="Logo" />
            <img className="profile" src={assets.profile_image} alt="Profile Image" />
        </div>
    )
}