class Home extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML =  
        `
            <style>
                :host {
                    display: block;
                }

                .hero {
                    background: linear-gradient(135deg, var(--bg-subtle, #f1f5f9), var(--border-color, #e2e8f0));
                    padding: var(--space-2xl, 3rem) var(--space-md, 1rem);
                    text-align: center;
                    border-bottom: 1px solid var(--border-color, #e2e8f0);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-sm);
                }

                .hero-pic{
                    width: 100%;
                }

                .hero-pic img{
                    width: 100%;
                    height: auto;
                }

                .hero-text{
                    width: 100%;
                }

                .hero-title {
                font-size: var(--font-size-3xl, 1.875rem);
                font-weight: var(--font-weight-bold, 700);
                color: var(--text-main, #0f172a);
                margin-bottom: var(--space-sm, 0.5rem);
                }

                .hero-subtitle {
                font-size: var(--font-size-lg, 1.125rem);
                color: var(--text-muted, #64748b);
                margin-bottom: var(--space-xl, 2rem);
                }

                .hero-btn {
                display: inline-block;
                background-color: var(--primary-color, #2563eb);
                color: var(--text-inverse, #ffffff);
                padding: var(--space-sm, 0.5rem) var(--space-xl, 2rem);
                font-weight: var(--font-weight-semibold, 600);
                border-radius: var(--radius-md, 0.5rem);
                transition: background-color var(--transition-fast, 150ms);
                }

                .hero-btn:hover {
                background-color: var(--primary-hover, #1d4ed8);
                }

                .section {
                max-width: 1200px;
                margin: 0 auto;
                padding: var(--space-2xl, 3rem) var(--space-md, 1rem);
                }

                .section-title {
                font-size: var(--font-size-2xl, 1.5rem);
                font-weight: var(--font-weight-bold, 700);
                color: var(--text-main, #0f172a);
                margin-bottom: var(--space-lg, 1.5rem);
                text-align: center;
                }

                .list-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: var(--space-lg, 1.5rem);
                }

                .list-item {
                background-color: var(--bg-surface, #ffffff);
                border: 1px solid var(--border-color, #e2e8f0);
                padding: var(--space-lg, 1.5rem);
                border-radius: var(--radius-lg, 0.75rem);
                text-align: center;
                box-shadow: var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05));
                }

                .list-item h4 {
                font-size: var(--font-size-lg, 1.125rem);
                font-weight: var(--font-weight-semibold, 600);
                margin-bottom: var(--space-xs, 0.25rem);
                color: var(--text-main, #0f172a);
                }

                .list-item p {
                font-size: var(--font-size-sm, 0.875rem);
                color: var(--text-muted, #64748b);
                }

                .brands-grid {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                gap: var(--space-xl, 2rem);
                background-color: var(--bg-subtle, #f1f5f9);
                padding: var(--space-xl, 2rem);
                border-radius: var(--radius-lg, 0.75rem);
                }

                .brand-logo {
                font-size: var(--font-size-xl, 1.25rem);
                font-weight: var(--font-weight-bold, 700);
                color: var(--text-muted, #64748b);
                letter-spacing: 1px;
                }

                .banner-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: var(--space-lg, 1.5rem);
                }

                .banner-card {
                background: linear-gradient(135deg, var(--primary-color, #2563eb), var(--primary-hover, #1d4ed8));
                color: var(--text-inverse, #ffffff);
                padding: var(--space-2xl, 3rem);
                border-radius: var(--radius-lg, 0.75rem);
                text-align: center;
                }

                .banner-card.secondary {
                background: linear-gradient(135deg, var(--text-main, #0f172a), var(--text-muted, #64748b));
                }

                .banner-card h3 {
                font-size: var(--font-size-xl, 1.25rem);
                font-weight: var(--font-weight-bold, 700);
                margin-bottom: var(--space-sm, 0.5rem);
                }

                .banner-card p {
                font-size: var(--font-size-base, 1rem);
                margin-bottom: var(--space-md, 1rem);
                opacity: 0.9;
                }

                .banner-btn {
                display: inline-block;
                background-color: var(--bg-surface, #ffffff);
                color: var(--text-main, #0f172a);
                padding: var(--space-xs, 0.25rem) var(--space-lg, 1.5rem);
                font-weight: var(--font-weight-semibold, 600);
                border-radius: var(--radius-sm, 0.375rem);
                transition: background-color var(--transition-fast, 150ms);
                }

                .banner-btn:hover {
                        background-color: var(--bg-subtle, #f1f5f9);
                }
            </style>
            <section class="hero">
                <div class="hero-text">
                    <h2>ShopEase</h2>
                    <h1 class="hero-title">Discover Our Latest Collection</h1>
                    <p class="hero-subtitle">Find the best products designed for your everyday lifestyle.</p>
                    <link-component path="/shop/" name="shop" class="hero-btn">Shop Now</link-component>
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