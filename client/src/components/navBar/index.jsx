import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import "./styles.css"
import { Link, useNavigate } from "react-router-dom"
import { StoreContext } from "../../context/storeContext"

export const NavBar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className="navbar">
            <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>

            <ul className="navbar-menu">
                <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>

                <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>

                <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>

                <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="Basket Icon" /></Link>

                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>

                {!token
                    ? <button onClick={() => setShowLogin(true)} >Login</button>
                    : <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="Profile Icon" />

                        <ul className="navbar-profile-dropdown">
                            <li>
                                <img src={assets.bag_icon} alt="Bag Icon" />

                                <p>Orders</p>
                            </li>

                            <hr />

                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="LogOut Icon" />

                                <p>LogOut</p>
                            </li>
                        </ul>
                    </div>}
            </div>
        </div>
    )
}