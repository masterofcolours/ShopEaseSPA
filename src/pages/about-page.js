class About extends HTMLElement {
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

                .about-container {
                max-width: 1000px;
                margin: 0 auto;
                padding: var(--space-2xl, 3rem) var(--space-md, 1rem);
                }

                .hero-section {
                text-align: center;
                margin-bottom: var(--space-2xl, 3rem);
                }

                .hero-title {
                font-size: 2.5rem;
                font-weight: var(--font-weight-bold, 700);
                color: var(--text-main, #0f172a);
                margin-bottom: var(--space-sm, 0.5rem);
                letter-spacing: -1px;
                }

                .hero-subtitle {
                font-size: var(--font-size-lg, 1.125rem);
                color: var(--text-muted, #64748b);
                max-width: 600px;
                margin: 0 auto;
                line-height: 1.6;
                }

                .content-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: var(--space-xl, 2rem);
                margin-bottom: var(--space-2xl, 3rem);
                }

                .card {
                background-color: var(--bg-surface, #ffffff);
                border: 1px solid var(--border-color, #e2e8f0);
                border-radius: var(--radius-lg, 0.75rem);
                padding: var(--space-xl, 2rem);
                display: flex;
                flex-direction: column;
                gap: var(--space-sm, 0.5rem);
                }

                .card h3 {
                font-size: 1.25rem;
                font-weight: var(--font-weight-semibold, 600);
                color: var(--text-main, #0f172a);
                margin: 0;
                }

                .card p {
                font-size: var(--font-size-base, 1rem);
                color: var(--text-muted, #64748b);
                line-height: 1.6;
                margin: 0;
                }

                .tech-stack {
                background-color: var(--bg-subtle, #f1f5f9);
                border-radius: var(--radius-lg, 0.75rem);
                padding: var(--space-xl, 2rem);
                text-align: center;
                }

                .tech-stack h3 {
                font-size: 1.5rem;
                color: var(--text-main, #0f172a);
                margin-bottom: var(--space-md, 1rem);
                }

                .badges {
                display: flex;
                flex-wrap: wrap;
                gap: var(--space-sm, 0.5rem);
                justify-content: center;
                }

                .badge {
                background-color: var(--bg-surface, #ffffff);
                color: var(--primary-color, #2563eb);
                border: 1px solid var(--border-color, #e2e8f0);
                padding: var(--space-xs, 0.25rem) var(--space-md, 1rem);
                border-radius: var(--radius-full, 9999px);
                font-size: var(--font-size-sm, 0.875rem);
                font-weight: var(--font-weight-medium, 500);
                }
            </style>

            <div class="about-container">
                <div class="hero-section">
                <h1 class="hero-title">About Our Store</h1>
                <p class="hero-subtitle">
                    We are building a high-performance, lightweight Single Page Application (SPA) using purely modern Vanilla JavaScript and Web Components without heavy external frameworks.
                </p>
                </div>

                <div class="content-grid">
                <div class="card">
                    <h3>Our Mission</h3>
                    <p>
                    To deliver an ultra-fast, smooth, and seamless shopping experience with zero framework overhead, focusing entirely on clean architecture and native web standards.
                    </p>
                </div>
                <div class="card">
                    <h3>Pure Architecture</h3>
                    <p>
                    Built from scratch using Custom Elements, Shadow DOM, Custom SPA Routing via History API, and an autonomous reactive State Management store.
                    </p>
                </div>
                </div>

                <div class="tech-stack">
                <h3>Built With Core Technologies</h3>
                <div class="badges">
                    <span class="badge">Vanilla JavaScript (ES6+)</span>
                    <span class="badge">Web Components</span>
                    <span class="badge">Shadow DOM</span>
                    <span class="badge">History API Router</span>
                    <span class="badge">Pub/Sub State Management</span>
                </div>
                </div>
            </div>


        `
    }

    connectedCallback(){
        this.render()
    }

}

window.customElements.define("about-component", About)

export default About;