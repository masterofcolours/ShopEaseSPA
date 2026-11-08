
class NOtFind extends HTMLElement {
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

                .not-found-container {
                min-height: 70vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: var(--space-2xl, 3rem) var(--space-md, 1rem);
                }

                .error-code {
                font-size: 8rem;
                font-weight: var(--font-weight-bold, 700);
                line-height: 1;
                color: var(--primary-color, #2563eb);
                margin: 0;
                letter-spacing: -2px;
                text-shadow: 0 10px 20px rgba(37, 99, 235, 0.15);
                }

                .error-title {
                font-size: var(--font-size-2xl, 1.5rem);
                font-weight: var(--font-weight-bold, 700);
                color: var(--text-main, #0f172a);
                margin-top: var(--space-md, 1rem);
                margin-bottom: var(--space-xs, 0.25rem);
                }

                .error-description {
                font-size: var(--font-size-base, 1rem);
                color: var(--text-muted, #64748b);
                max-width: 420px;
                margin-bottom: var(--space-xl, 2rem);
                line-height: 1.6;
                }

                .actions {
                display: flex;
                gap: var(--space-md, 1rem);
                flex-wrap: wrap;
                justify-content: center;
                }

                .btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: var(--space-sm, 0.5rem) var(--space-xl, 2rem);
                font-size: var(--font-size-base, 1rem);
                font-weight: var(--font-weight-semibold, 600);
                border-radius: var(--radius-md, 0.5rem);
                text-decoration: none;
                transition: background-color var(--transition-fast, 150ms), color var(--transition-fast, 150ms);
                cursor: pointer;
                }

                .btn-primary {
                background-color: var(--primary-color, #2563eb);
                color: var(--text-inverse, #ffffff);
                }

                .btn-primary:hover {
                background-color: var(--primary-hover, #1d4ed8);
                }

                .btn-outline {
                background-color: transparent;
                color: var(--text-main, #0f172a);
                border: 1px solid var(--border-color, #e2e8f0);
                }

                .btn-outline:hover {
                background-color: var(--bg-subtle, #f1f5f9);
                }
            </style>
            
            <div class="not-found-container">
                <h1 class="error-code">404</h1>
                <h2 class="error-title">Page Not Found</h2>
                <p class="error-description">
                The page you are looking for doesn't exist or has been moved.
                </p>
                <div class="actions">
                <link-component path="/" name="home" class="btn btn-primary">
                    <p>Go Back Home</p>
                </link-component>
                <link-component path="/shop/" name="shop" class="btn btn-outline">
                    <p>Browse Products</p>
                </link-component>
                </div>
            </div>

        `
    }


    connectedCallback(){
        this.render()
    }

}

window.customElements.define("notfind-component", NOtFind);

export default NOtFind;