import "./Header.css";
import Logo from "../img/Annabelle.svg";
import Cart from "../img/Vector (5).svg";
import Love from "../img/Vector (6).svg";
import Flag from "../img/openmoji_flag-liberia.svg";
import Arrow from "../img/Vector (7).svg";
import Mask from "../img/Mask group.svg";
import Mask2 from "../img/2150571366.svg";
import Leave from "../img/pngwing.com (31).svg";
import Vector3 from "../img/Vector (3).svg";
import Vector2 from "../img/Vector (2).svg";
import Vector1 from "../img/Vector (1).svg";
import Group from "../img/Group.svg";
import Hamburger from "../img/icon-hamburger.svg";
function Header(){
    return(
        <div id="header">
            <div className="header">
                <header>
                    <img src={Logo} alt="" />
                    <div>
                        <a href="#">Collections</a>
                        <a href="#">Products</a>
                        <a href="#">About Us</a>
                        <img src={Cart} alt="" />
                        <img src={Love} alt="" />
                        <nav>
                            <img src={Flag} alt="" />
                            <li>English</li>
                            <img src={Arrow} alt="" />
                        </nav>
                        <div>
                            <nav>
                                <a href="#">Welcome Back!</a>
                                <li>Abdulmalik</li>
                            </nav>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <img src={Hamburger} className="ham" alt="" />
                </header>

                <div className="content">
                    <span>Your Skin Delight</span>
                    <h1>Nature Touch</h1>
                    <p>From gentle cleansers to powerful serums, each formula is packed with active ingredients that target specific needs — and deliver real results.</p>
                    <button>Shop Now</button>
                </div>
            </div>

            <div id="container">
                <article>
                    <div>
                        <img src={Vector1} alt="" />
                        <span>Chemical-free</span>
                        <p>Gentle on your skin, safe for everyday use.</p>
                    </div>
                    <div>
                        <img src={Vector2} alt="" />
                        <span>Natural Formula</span>
                        <p>Powered by nature, perfected by science.</p>
                    </div>
                    <div>
                        <img src={Vector3} className="img" alt="" />
                        <span>Quality Assured</span>
                        <p>Skincare crafted to the highest standards.</p>
                    </div>
                    <div>
                        <img src={Group} alt="" />
                        <span>Secure Shopping</span>
                        <p>Shop with confidence, your data is protected.</p>
                    </div>
                </article>
                <nav>
                    <h2>Your ultimate beauty <img src={Mask} alt="mask"/> and cosmetic hub <img src={Mask2} alt="" /> for your beauty. <img src={Leave} alt="" /></h2>
                </nav>
            </div>
        </div>
    )
}
export default Header;