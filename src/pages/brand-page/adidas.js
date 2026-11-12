class AdidasPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .adidas-container {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--space-xl, 3rem) var(--space-md, 1rem);
          box-sizing: border-box;
          background-color: var(--bg-subtle, #f8fafc);
        }

        .adidas-wrapper {
          width: 100%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .brand-hero {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }

        .hero-content {
          padding: 3rem;
        }

        .brand-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary-color, #2563eb);
          margin-bottom: 0.5rem;
          display: block;
        }

        .brand-title {
          font-size: 2.5rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 1rem 0;
          letter-spacing: -0.5px;
        }

        .brand-desc {
          font-size: 1rem;
          color: var(--text-muted, #64748b);
          line-height: 1.7;
          margin: 0;
        }

        .hero-image-box {
          width: 100%;
          height: 100%;
          min-height: 320px;
          background-color: #f1f5f9;
          position: relative;
          overflow: hidden;
        }

        .hero-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .hero-image-box img:hover {
          transform: scale(1.03);
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 1.5rem 0;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .product-card {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.01);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }

        .product-name {
          font-size: 1.1rem;
          font-weight: var(--font-weight-semibold, 600);
          color: var(--text-main, #0f172a);
          margin: 0;
        }

        .product-price {
          font-size: 1rem;
          font-weight: 700;
          color: var(--primary-color, #2563eb);
          margin: 0;
        }

        .btn-add {
          background-color: var(--primary-color, #2563eb);
          color: #ffffff;
          border: none;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md, 0.5rem);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .btn-add:hover {
          background-color: var(--primary-hover, #1d4ed8);
        }

        @media (max-width: 768px) {
          .brand-hero {
            grid-template-columns: 1fr;
          }
          .hero-content {
            padding: 2rem;
          }
          .brand-title {
            font-size: 2rem;
          }
          .hero-image-box {
            min-height: 220px;
          }
        }
      </style>

      <div class="adidas-container">
        <div class="adidas-wrapper">
          
          <!-- هدر معرفی برند با عکس -->
          <div class="brand-hero">
            <div class="hero-content">
              <span class="brand-tag">Featured Brand</span>
              <h1 class="brand-title">Adidas Originals</h1>
              <p class="brand-desc">
                Unleash your potential with high-performance sportswear and timeless street style. Discover innovative footwear and apparel designed to champion both sport and culture.
              </p>
            </div>
            <div class="hero-image-box">
              <img src="https://images.unsplash.com/photo-1518002153175-72f44f77c8f9?auto=format&fit=crop&w=800&q=80" alt="Adidas Gear">
            </div>
          </div>

        </div>
      </div>
    `;
  }
}

window.customElements.define('adidas-page', AdidasPage);
export default AdidasPage;