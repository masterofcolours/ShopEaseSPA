import getData from "../../services/api.js";
import "../product-card/product-card.js";
class ProductGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
  }

  set products(value) {
    this._products = value;
    this.render();
  }

  get products() {
    return this._products;
  }

   connectedCallback() {
    this._products = getData();    
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: var(--space-xl, 2rem);
          padding: 2rem 10rem;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .empty-state {
          text-align: center;
          padding: var(--space-2xl, 3rem);
          color: var(--text-muted, #64748b);
          font-size: var(--font-size-lg, 1.125rem);
          grid-column: 1 / -1;
        }

        @media screen and (max-width: 1200px) {
          .grid-container {
            padding: 1.5rem 4rem;
            gap: 1.5rem;
          }
        }

        @media screen and (max-width: 992px) {
          .grid-container {
            padding: 1.5rem 2rem;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 1.25rem;
          }
        }

        @media screen and (max-width: 768px) {
          .grid-container {
            padding: 1rem 1rem;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 1rem;
          }
          
          .empty-state {
            padding: 2rem 1rem;
            font-size: 1rem;
          }
        }

        @media screen and (max-width: 480px) {
          .grid-container {
            padding: 0.75rem 0.5rem;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
      </style>

      <div class="grid-container">
        ${
          (this._products?.length || 0) > 0
            ? this._products.map(product => `
                <product-component
                  title="${product.title}" 
                  price="${product.price}"
                  id="${product.id}"
                  category="${product.category}" 
                  image="${product.image}">
                </product-component>
              `).join('')
            : `<div class="empty-state">No products found.</div>`
        }
      </div>
    `;
  }
}

window.customElements.define('product-grid', ProductGrid);
export default ProductGrid;