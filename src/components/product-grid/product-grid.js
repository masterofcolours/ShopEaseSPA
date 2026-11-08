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
          padding: 1rem 10rem;
        }

        .empty-state {
          text-align: center;
          padding: var(--space-2xl, 3rem);
          color: var(--text-muted, #64748b);
          font-size: var(--font-size-lg, 1.125rem);
          grid-column: 1 / -1;
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