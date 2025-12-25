const HeroSection = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Discover the latest in Nike footwear and apparel. Elevate your performance and style with our cutting-edge designs.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/flipkart.jpg" alt="flipkart" className="brand"/>
                        <img src="/images/amazon.jpg" alt="amazont"  className="brand" />
                    </div>
                </div>
            
            </div>
            <div className="hero-image">
                <img src="/images/shoes.jpeg" className="hero-shoe" alt="shoes" />
            </div>
        </main>
    );
};

export default HeroSection;
