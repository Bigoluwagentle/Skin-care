import "./Main.css";
import image4 from "../img/image 4.svg";
import image18 from "../img/image 18.svg";
import image19 from "../img/image 19.svg";
import About from "../img/woman-holding-white-cosmetic-tube-with-closed-eyes 1.svg";

function Main(){
    return(
        <div id="main">
            <nav>
                <button>Cleanser</button>
                <button>Lotion</button>
                <button>Moisturizer</button>
            </nav>

            <article>
                <div>
                    <img src={image4} alt="" />
                    <h4>Gentle wash</h4>
                    <nav>
                        <span>$70.00</span>
                        <span>$100.00</span>
                    </nav>
                    
                </div>
                <div>
                    <img src={image19} alt="" />
                    <h4>Gentle wash</h4>
                    <nav>
                        <span>$70.00</span>
                        <span>$100.00</span>
                    </nav>
                </div>
                <div>
                    <img src={image18} alt="" />
                    <h4>Gentle wash</h4>
                    <nav>
                        <span>$70.00</span>
                        <span>$100.00</span>
                    </nav>
                </div>
            </article>
            <a>Shop cleanser</a>

            <section>
                <nav>
                    <h3>About Us</h3>
                    <p>At Annabelle, we believe skincare isn’t just about looking good — it’s about feeling confident in your own skin.</p>
                    <p> Our journey began with a mission: to create high-quality, skin-loving formulas backed by research, crafted from nature, and free from harmful additives. Every product is dermatologist-tested, cruelty-free, and designed to deliver visible results you can trust.</p>
                    <button>Learn More</button>
                </nav>
                <img src={About} alt="" />
            </section>

            <main>
                <section className="bg">
                    <div>
                        <span>100%</span>
                        <h4>Tested & Trusted</h4>
                        <p>Eco-friendly materials designed to care for the planet as much as your skin.</p>
                    </div>
                </section>

                <section className="flex">
                    <nav className="fimage">
                        <span>Eco-Friendly Packaging</span>
                        <p>Every product is carefully crafted to meet the highest quality standards.</p>
                    </nav>

                    <nav className="simage">
                        <span>More than</span>
                        <h4>Beauty</h4>
                        <p>Every product is carefully crafted to meet the highest quality standards.</p>
                    </nav>
                    
                </section>
            </main>
        </div>
    )
}
export default Main;