class BrandsPage extends HTMLElement {
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

        .brands-container {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--space-xl, 3rem) var(--space-md, 1rem);
          box-sizing: border-box;
          background-color: var(--bg-subtle, #f8fafc);
        }

        .brands-wrapper {
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .brands-header {
          text-align: center;
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: 2.5rem 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }

        .brands-title {
          font-size: 2rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.5px;
        }

        .brands-subtitle {
          font-size: 1rem;
          color: var(--text-muted, #64748b);
          margin: 0;
        }

        .brands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .brand-card {
          background-color: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-lg, 0.75rem);
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.01);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .brand-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.1);
          border-color: var(--primary-color, #2563eb);
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin: 0;
        }

        .brand-desc {
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-muted, #64748b);
          margin: 0;
          line-height: 1.5;
        }

        .brand-link {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 0.6rem 1.25rem;
          background-color: var(--bg-subtle, #f8fafc);
          color: var(--primary-color, #2563eb);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--radius-md, 0.5rem);
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .brand-link:hover {
          background-color: var(--primary-color, #2563eb);
          color: #ffffff;
          border-color: var(--primary-color, #2563eb);
        }

        @media (max-width: 768px) {
          .brands-title {
            font-size: 1.75rem;
          }
          .brands-header {
            padding: 1.5rem 1rem;
          }
        }
      </style>

      <div class="brands-container">
        <div class="brands-wrapper">
          
          <div class="brands-header">
            <h1 class="brands-title">Explore Top Brands</h1>
            <p class="brands-subtitle">Discover products from world-class manufacturers and designers.</p>
          </div>

          <div class="brands-grid">
            
            <div class="brand-card">
              <h3 class="brand-name">Apple</h3>
              <p class="brand-desc">Innovative technology, sleek design, and powerful ecosystem devices.</p>
              <link-component path="/brand/apple/" name="brand/apple" class="brand-link">View Products</link-component>
            </div>

            <div class="brand-card">
              <h3 class="brand-name">Nike</h3>
              <p class="brand-desc">Top-quality sportswear, footwear, and athletic lifestyle gear.</p>
              <link-component path="/brand/nike/" name="brand/nike" class="brand-link">View Products</link-component>
            </div>

            <div class="brand-card">
              <h3 class="brand-name">Adidas</h3>
              <p class="brand-desc">Performance sports apparel and iconic streetwear collections.</p>
              <link-component path="/brand/adidas/" name="brand/adidas" class="brand-link">View Products</link-component>
            </div>

            <div class="brand-card">
              <h3 class="brand-name">Samsung</h3>
              <p class="brand-desc">Cutting-edge electronics, smartphones, and home innovations.</p>
              <link-component path="/brand/samsung/" name="brand/samsung" class="brand-link">View Products</link-component>
            </div>

            <div class="brand-card">
              <h3 class="brand-name">Sony</h3>
              <p class="brand-desc">Immersive entertainment, audio gear, and advanced digital tech.</p>
              <link-component path="/brand/sony/" name="sony" class="brand-link">View Products</link-component>
            </div>

          </div>

        </div>
      </div>
    `;
  }
}

window.customElements.define('brands-page', BrandsPage);
export default BrandsPage;