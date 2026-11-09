import getData from "../../services/api.js";
import returnSearchValueElement from "../../utils/search-bar.js";

class SearchPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
  }


  
  async connectedCallback() {
    "".toLocaleLowerCase()
    this._products = await getData();
    this.searched_value = returnSearchValueElement.input.value
    this._products = this._products.filter((item)=>{
        return item.title.toLocaleLowerCase().includes(returnSearchValueElement.input.value.toLocaleLowerCase())
    })
    returnSearchValueElement.input.value = "";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .section-title {
          font-size: var(--font-size-2xl, 1.5rem);
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-main, #0f172a);
          margin-bottom: var(--space-lg, 1.5rem);
          text-align: center;
          padding: 0 1rem;
          box-sizing: border-box;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: var(--space-xl, 2rem);
          padding: 1rem 4rem;
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
            padding: 1rem 2rem;
            gap: 1.5rem;
          }
        }

        @media screen and (max-width: 992px) {
          .grid-container {
            padding: 1rem 1.5rem;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 1.25rem;
          }

          .section-title {
            font-size: 1.35rem;
          }
        }

        @media screen and (max-width: 768px) {
          .grid-container {
            padding: 0.75rem 1rem;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 1rem;
          }

          .section-title {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          .empty-state {
            padding: 2rem 1rem;
            font-size: 1rem;
          }
        }

        @media screen and (max-width: 480px) {
          .grid-container {
            padding: 0.5rem 0.75rem;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .section-title {
            font-size: 1.1rem;
            padding: 0 0.5rem;
          }
        }
      </style>

      <h2 class="section-title">Search Page - ${this.searched_value}</h2>

      <div class="grid-container">
        ${
          this._products.length > 0
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

window.customElements.define('search-page', SearchPage);
export default SearchPage;