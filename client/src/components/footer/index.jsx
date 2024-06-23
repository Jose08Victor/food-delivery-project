import { assets } from '../../assets/assets'
import './styles.css'

export const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Logo" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis porro culpa? Ipsum enim quidem, iusto nesciunt sit nihil molestias, recusandae fuga praesentium blanditiis impedit repellat deserunt, non laudantium eius!</p>

                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook Icon" />

                        <img src={assets.twitter_icon} alt="Twitter Icon" />

                        <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>

                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GEI IN TOUCH</h2>

                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>

            <hr />

            <p className="footer-copyright">Copyright 2024 © Tomato.com All Right Reserved.</p>
        </div>
    )
}