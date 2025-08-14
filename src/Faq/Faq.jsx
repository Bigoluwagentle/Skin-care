import "./Faq.css";
import star from "../img/Vector.svg";
import frame from "../img/Frame 2147207669.svg";
import frame1 from "../img/Frame 2147207671.svg";
import frame2 from "../img/Frame 2147207672.svg";
import frame3 from "../img/Frame 2147207673.svg";
import image20 from "../img/image 20.svg";
import frame64 from "../img/Frame 2147207664.svg";
import frame65 from "../img/Frame 2147207665.svg";
import frame66 from "../img/Frame 2147207666.svg";
import frame67 from "../img/Frame 2147207667.svg";
import frame68 from "../img/Frame 2147207668.svg";
import twitter from "../img/Group (1).svg";
import facebook from "../img/Group (2).svg";
import insta from "../img/Vector (4).svg";
import Logo from "../img/Annabelle.svg";
function Faq(){
    return(
        <div id="faq">
            <span>What our customers are saying</span>
            <nav>
                <h3> It feels healthier, smoother & more radiant than ever. I love knowing I’m using something natural and effective!</h3>\
                <nav>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </nav>
                <li>Elizabeth Jameson</li>
                <p>Verified Buyer</p>
            </nav>

            <div>
                <img src={frame} alt="" />
                <img src={frame1} alt="" />
                <img src={frame2} alt="" />
                <img src={frame3} alt="" />
                <img src={frame} alt="" />
            </div>
            <img src={image20} alt="" />
            <div>
                <img src={frame64} alt="" />
                <img src={frame65} alt="" />
                <img src={frame66} alt="" />
                <img src={frame67} alt="" />
                <img src={frame68} alt="" />
            </div>

            <footer>
                <div className="wid">
                    <nav>
                        <h2>Annabelle</h2>
                        <p>Discover products that work with your skin, not against it. From gentle cleansers to powerful serums, each formula is packed with active ingredients that target specific needs — and deliver real results.</p>
                    </nav>
                    <nav>
                        <span>Suscribe to our Newsletter</span>
                        <p>Be the first to know about our latest product arrival</p>
                        <div>
                            <input type="text" placeholder="Your Email" />
                            <button>Subscribe</button>
                        </div>
                    </nav>

                </div>
                <div>
                    <p>Pages</p>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Shop</a>
                </div>
                <div>
                    <p>Categories</p>
                    <a href="#">All Products</a>
                    <a href="#">Cleaners</a>
                    <a href="#">Lotion</a>
                    <a href="#">Moisturizers</a>
                </div>
                <div id="div">
                    <nav>
                        <p>Support</p>
                        <a href="#">Contact</a>
                        <a href="#">FAQs</a>
                        <a href="#">Shipping and Delivery</a>
                        <a href="#">Orders and Returns</a>
                        <a href="#">Terms and Conditions</a>
                    </nav>
                    
                    <nav className="nav">
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={insta} alt="" />
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Faq;