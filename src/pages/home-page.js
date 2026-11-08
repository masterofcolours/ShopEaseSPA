class Home extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML =  
        `
            <link rel="stylesheet" href="./src/pages/home-style.css" />
            <section class="hero">
                <div class="hero-text">
                    <h2>ShopEase</h2>
                    <h1 class="hero-title">Discover Our Latest Collection</h1>
                    <p class="hero-subtitle">Find the best products designed for your everyday lifestyle.</p>
                    <link-component path="/shop/" name="shop" class="hero-btn">Shop Now</link-component>
                </div>

                <div class="hero-pic">
                    <img src="/src/assets/hero/hero.jpg" >
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Featured Categories</h2>
                <div class="list-grid">
                <div class="list-item">
                    <h4>Electronics</h4>
                    <p>Gadgets & Devices</p>
                </div>
                <div class="list-item">
                    <h4>Fashion</h4>
                    <p>Apparel & Accessories</p>
                </div>
                <div class="list-item">
                    <h4>Home & Living</h4>
                    <p>Decor & Furniture</p>
                </div>
                <div class="list-item">
                    <h4>Sports</h4>
                    <p>Fitness & Equipment</p>
                </div>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Trusted Brands</h2>
                <div class="brands-grid">
                <span class="brand-logo">NIKE</span>
                <span class="brand-logo">ADIDAS</span>
                <span class="brand-logo">APPLE</span>
                <span class="brand-logo">SAMSUNG</span>
                <span class="brand-logo">SONY</span>
                </div>
            </section>

            <section>
                <h2 class="section-title">Products<h2>
                <product-grid></product-grid>
            <section/>

            <section class="section">
                <div class="banner-grid">
                <div class="banner-card">
                    <h3>Special Summer Sale</h3>
                    <p>Get up to 50% off on selected items this season.</p>
                    <a href="/shop" class="banner-btn" data-link>Explore</a>
                </div>
                <div class="banner-card secondary">
                    <h3>New Arrivals</h3>
                    <p>Check out the latest tech trends and innovations.</p>
                    <a href="/shop" class="banner-btn" data-link>Discover</a>
                </div>
                </div>
            </section>

        `
    }

    connectedCallback(){
        this.render()
    }

}

window.customElements.define("home-component", Home)

export default Home;