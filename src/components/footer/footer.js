class Footer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
            <style>
                @import url(./assets/styles/global.css);
                @import url(./assets/styles/reset.css);

                .footer {
                background-color: var(--bg-surface);
                border-top: 1px solid var(--border-color);
                margin-top: auto;
                padding: 0 var(--space-lg);
                }

                .footer-top {
                padding: var(--space-2xl) 0 var(--space-xl);
                }

                .footer-top-inner {
                display: grid;
                grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
                gap: var(--space-2xl);
                max-width: 1200px;
                margin: 0 auto;
                }

                .brand-logo {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--text-main, #0f172a);
                text-decoration: none;
                }

                .brand-desc {
                font-size: var(--font-size-sm);
                color: var(--text-muted);
                margin-top: var(--space-md);
                margin-bottom: var(--space-lg);
                line-height: 1.6;
                }

                .social-links {
                display: flex;
                gap: var(--space-sm);
                }

                .social-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 36px;
                height: 36px;
                border-radius: var(--radius-full);
                background-color: var(--bg-subtle);
                color: var(--text-muted);
                text-decoration: none;
                transition: all var(--transition-fast);
                }

                .social-btn:hover {
                background-color: var(--primary-color);
                color: var(--text-inverse);
                }

                .footer-heading {
                font-size: var(--font-size-base);
                font-weight: var(--font-weight-semibold);
                color: var(--text-main);
                margin-top: 0;
                margin-bottom: var(--space-lg);
                }

                .footer-links {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: var(--space-sm);
                }

                .footer-links a {
                font-size: var(--font-size-sm);
                color: var(--text-muted);
                text-decoration: none;
                transition: color var(--transition-fast);
                }

                .footer-links a:hover {
                color: var(--primary-color);
                }

                .newsletter-desc {
                font-size: var(--font-size-sm);
                color: var(--text-muted);
                margin-top: 0;
                margin-bottom: var(--space-md);
                line-height: 1.5;
                }

                .newsletter-form {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                }

                .newsletter-input {
                width: 100%;
                padding: 0.5rem 1rem;
                font-family: system-ui, -apple-system, sans-serif;
                font-size: 0.875rem;
                color: var(--text-main, #0f172a);
                background-color: var(--bg-subtle, #f8fafc);
                border: 1px solid var(--border-color, #e2e8f0);
                border-radius: 0.5rem;
                outline: none;
                box-sizing: border-box;
                }

                .newsletter-input:focus {
                border-color: var(--primary-color, #2563eb);
                }

                .newsletter-button {
                background-color: var(--primary-color, #2563eb);
                border: 1px solid var(--primary-color, #2563eb);
                border-radius: 0.5rem;
                cursor: pointer;
                padding: 0.5rem 1rem;
                font-family: system-ui, -apple-system, sans-serif;
                font-size: 0.875rem;
                font-weight: 500;
                color: #ffffff;
                transition: opacity var(--transition-fast);
                }

                .newsletter-button:hover {
                opacity: 0.9;
                }

                .footer-bottom {
                border-top: 1px solid var(--border-color);
                padding: 1.5rem 0;
                }

                .footer-bottom-inner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 1200px;
                margin: 0 auto;
                gap: 1rem;
                }

                .copyright {
                font-size: var(--font-size-sm);
                color: var(--text-muted);
                margin: 0;
                }

                .footer-bottom-links {
                display: flex;
                gap: 1.5rem;
                }

                .footer-bottom-links a {
                font-size: var(--font-size-sm);
                color: var(--text-muted);
                text-decoration: none;
                transition: color var(--transition-fast);
                }

                .footer-bottom-links a:hover {
                color: var(--primary-color);
                }

                @media screen and (max-width: 1024px) {
                .footer-top-inner {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                }
                }

                @media screen and (max-width: 768px) {
                .footer {
                    padding: 0 1rem;
                }

                .footer-top {
                    padding: 2rem 0 1.5rem;
                }

                .footer-top-inner {
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }

                .footer-bottom-inner {
                    flex-direction: column;
                    text-align: center;
                    gap: 1rem;
                }

                .footer-bottom-links {
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                }

                @media screen and (max-width: 480px) {
                .footer {
                    padding: 0 0.75rem;
                }

                .footer-top {
                    padding: 1.5rem 0 1rem;
                }

                .footer-heading {
                    margin-bottom: 0.75rem;
                }

                .brand-desc,
                .newsletter-desc {
                    font-size: 0.8125rem;
                }

                .footer-bottom {
                    padding: 1rem 0;
                }
                }
                </style>


                <footer class="footer">
                    <div class="footer-top">
                        <div class="container footer-top-inner">
                            <div class="footer-brand">
                                <a href="#" class="brand-logo">ShopEase</a>
                                <p class="brand-desc">Your premium destination for quality products, fast delivery, and exceptional customer support.</p>
                                <div class="social-links">
                                    <a href="#" class="social-btn" aria-label="Facebook">
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </a>
                                    <a href="#" class="social-btn" aria-label="Twitter">
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                    </a>
                                    <a href="#" class="social-btn" aria-label="Instagram">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                </div>
                            </div>

                            <div class="footer-column">
                                <h4 class="footer-heading">Shop</h4>
                                <ul class="footer-links">
                                    <li><a href="#">Electronics</a></li>
                                    <li><a href="#">Fashion & Apparel</a></li>
                                    <li><a href="#">Home & Living</a></li>
                                    <li><a href="#">Special Offers</a></li>
                                    <li><a href="#">New Arrivals</a></li>
                                </ul>
                            </div>

                            <div class="footer-column">
                                <h4 class="footer-heading">Customer Support</h4>
                                <ul class="footer-links">
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Track Order</a></li>
                                    <li><a href="#">Returns & Refunds</a></li>
                                    <li><a href="#">Shipping Info</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>

                            <div class="footer-column">
                                <h4 class="footer-heading">Newsletter</h4>
                                <p class="newsletter-desc">Subscribe to receive updates, access to exclusive deals, and more.</p>
                                <form class="newsletter-form" onsubmit="event.preventDefault();">
                                    <input type="email" placeholder="Enter your email" class="newsletter-input" required>
                                    <button type="submit" class="newsletter-button">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <div class="container footer-bottom-inner">
                            <p class="copyright">&copy; 2026 ShopEase Inc. All rights reserved.</p>
                            <div class="footer-bottom-links">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                                <a href="#">Cookie Preferences</a>
                            </div>
                        </div>
                    </div>
                </footer>


        `
    }

    connectedCallback(){
        this.render()
    }

}

window.customElements.define("footer-component", Footer);

export default Footer;