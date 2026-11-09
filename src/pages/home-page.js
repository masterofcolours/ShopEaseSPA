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
                width: 100%;
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
                box-sizing: border-box;
                }

                .hero-pic {
                width: 100%;
                }

                .hero-pic img {
                width: 100%;
                height: auto;
                display: block;
                }

                .hero-text {
                width: 100%;
                max-width: 800px;
                margin: 0 auto;
                }

                .hero-text h2 {
                font-size: 1.125rem;
                font-weight: 600;
                color: var(--primary-color, #2563eb);
                margin: 0 0 0.5rem 0;
                text-transform: uppercase;
                letter-spacing: 1px;
                }

                .hero-title {
                font-size: var(--font-size-3xl, 2.5rem);
                font-weight: var(--font-weight-bold, 700);
                color: var(--text-main, #0f172a);
                margin: 0 0 var(--space-sm, 0.5rem) 0;
                line-height: 1.2;
                }

                .hero-subtitle {
                font-size: var(--font-size-lg, 1.125rem);
                color: var(--text-muted, #64748b);
                margin: 0 0 var(--space-xl, 2rem) 0;
                }

                .hero-btn {
                display: inline-block;
                background-color: var(--primary-color, #2563eb);
                color: var(--text-inverse, #ffffff);
                padding: var(--space-sm, 0.75rem) var(--space-xl, 2rem);
                font-weight: var(--font-weight-semibold, 600);
                border-radius: var(--radius-md, 0.5rem);
                text-decoration: none;
                transition: background-color var(--transition-fast, 150ms);
                }

                .hero-btn:hover {
                background-color: var(--primary-hover, #1d4ed8);
                }

                .section {
                max-width: 1200px;
                margin: 0 auto;
                padding: var(--space-2xl, 3rem) var(--space-md, 1rem);
                box-sizing: border-box;
                }

                .section-title {
                font-size: var(--font-size-2xl, 1.75rem);
                font-weight: var(--font-weight-bold, 700);
                color: var(--text-main, #0f172a);
                margin-top: 0;
                margin-bottom: var(--space-lg, 1.5rem);
                text-align: center;
                }

                .list-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: var(--space-lg, 1.5rem);
                }

                .list-item {
                background-color: var(--bg-surface, #ffffff);
                border: 1px solid var(--border-color, #e2e8f0);
                padding: var(--space-lg, 1.5rem);
                border-radius: var(--radius-lg, 0.75rem);
                text-align: center;
                box-shadow: var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05));
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .list-item:hover {
                transform: translateY(-3px);
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .list-item h4 {
                font-size: var(--font-size-lg, 1.125rem);
                font-weight: var(--font-weight-semibold, 600);
                margin: 0 0 var(--space-xs, 0.25rem) 0;
                color: var(--text-main, #0f172a);
                }

                .list-item p {
                font-size: var(--font-size-sm, 0.875rem);
                color: var(--text-muted, #64748b);
                margin: 0;
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
                box-sizing: border-box;
                }

                .brand-logo {
                font-size: var(--font-size-xl, 1.25rem);
                font-weight: var(--font-weight-bold, 700);
                color: var(--text-muted, #64748b);
                letter-spacing: 1px;
                }

                .banner-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: var(--space-lg, 1.5rem);
                }

                .banner-card {
                background: linear-gradient(135deg, var(--primary-color, #2563eb), var(--primary-hover, #1d4ed8));
                color: var(--text-inverse, #ffffff);
                padding: var(--space-2xl, 2.5rem);
                border-radius: var(--radius-lg, 0.75rem);
                text-align: center;
                box-sizing: border-box;
                }

                .banner-card.secondary {
                background: linear-gradient(135deg, var(--text-main, #0f172a), var(--text-muted, #64748b));
                }

                .banner-card h3 {
                font-size: var(--font-size-xl, 1.5rem);
                font-weight: var(--font-weight-bold, 700);
                margin: 0 0 var(--space-sm, 0.5rem) 0;
                }

                .banner-card p {
                font-size: var(--font-size-base, 1rem);
                margin: 0 0 var(--space-md, 1rem) 0;
                opacity: 0.9;
                }

                .banner-btn {
                display: inline-block;
                background-color: var(--bg-surface, #ffffff);
                color: var(--text-main, #0f172a);
                padding: var(--space-xs, 0.5rem) var(--space-lg, 1.5rem);
                font-weight: var(--font-weight-semibold, 600);
                border-radius: var(--radius-sm, 0.375rem);
                text-decoration: none;
                transition: background-color var(--transition-fast, 150ms);
                }

                .banner-btn:hover {
                background-color: var(--bg-subtle, #f1f5f9);
                }

                @media screen and (max-width: 992px) {
                .hero {
                    padding: 2.5rem 1.5rem;
                }

                .hero-title {
                    font-size: 2.125rem;
                }

                .section {
                    padding: 2.5rem 1.5rem;
                }
                }

                @media screen and (max-width: 768px) {
                .hero {
                    padding: 2rem 1rem;
                }

                .hero-title {
                    font-size: 1.75rem;
                }

                .hero-subtitle {
                    font-size: 1rem;
                    margin-bottom: 1.5rem;
                }

                .section {
                    padding: 2rem 1rem;
                }

                .section-title {
                    font-size: 1.35rem;
                    margin-bottom: 1.25rem;
                }

                .brands-grid {
                    gap: 1.25rem;
                    padding: 1.5rem 1rem;
                }

                .brand-logo {
                    font-size: 1.1rem;
                }
                }

                @media screen and (max-width: 480px) {
                .hero {
                    padding: 1.5rem 0.75rem;
                }

                .hero-title {
                    font-size: 1.5rem;
                }

                .hero-subtitle {
                    font-size: 0.875rem;
                }

                .hero-btn {
                    padding: 0.5rem 1.25rem;
                    font-size: 0.875rem;
                }

                .section {
                    padding: 1.5rem 0.75rem;
                }

                .section-title {
                    font-size: 1.2rem;
                }

                .list-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }

                .brands-grid {
                    gap: 1rem;
                    padding: 1rem;
                    justify-content: center;
                }

                .banner-card {
                    padding: 1.75rem 1rem;
                }
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