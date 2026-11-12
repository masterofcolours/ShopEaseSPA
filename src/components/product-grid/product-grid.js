import getData from "../../services/api.js";
import "../product-card/product-card.js";
class ProductGrid extends HTMLElement {
  constructor() {
    super();
    this.pagination = 8;
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
    
    if(this.getAttribute("category")){
      this._products = this._products.filter((item)=>{
        return item.category === this.getAttribute("category");
      })
    }
    
    
    this.render();
    
    if(!this.getAttribute("category")){
      
      const box = this.shadowRoot.querySelector(".grid-container");
      const boxPagination = this.shadowRoot.querySelector(".pagination-box");

      box.innerHTML = "";

      let paginationCount = Math.ceil(this._products.length / this.pagination);

      
      
      let htmlString = document.createDocumentFragment();;
      
      for (let i = 1; i <= paginationCount; i++) {
          const newpaginationItem = document.createElement("div");
          newpaginationItem.setAttribute("class", "btn")
          newpaginationItem.textContent = i;

          newpaginationItem.addEventListener("click", (event)=>{
          box.innerHTML = "";

          const allBtns = this.shadowRoot.querySelectorAll(".btn");

          allBtns.forEach((item)=>{
            if(item === event.target){              
              item.classList.add("active")
            }else{
              item.classList.remove("active")
            }

          })

        
          for (let j = (i * this.pagination - this.pagination); j <= (i * this.pagination - 1); j++){
            const item = this._products[j];

            console.log(j);
            

            if(item){
              box.innerHTML += 
              `
                <product-component
                    title="${item.title}" 
                    price="${item.price}"
                    id="${item.id}"
                    category="${item.category}" 
                    image="${item.image}">
                </product-component>
              `
            }else{
              break;
            }
          }

          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
          
        })
        
        
        htmlString.appendChild(newpaginationItem)
      }
      boxPagination.appendChild(htmlString);
      
      for (let j = 0; j < 10; j++){
        const item = this._products[j];

        if(item){
          box.innerHTML += 
          `
            <product-component
                title="${item.title}" 
                price="${item.price}"
                id="${item.id}"
                category="${item.category}" 
                image="${item.image}">
            </product-component>
          `
        }else{
          break;
        }
      }
      

    }


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

        .pagination-box{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 20px 0;
        }

        .pagination-box div{
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          background-color: #bdbebf;
          cursor: pointer;
          padding: 5px 10px;
          margin: 0 10px;
          border-radius: 0.5rem;
        }

        .active{
          background-color: #2563eb !important;
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

      <div class="pagination-box">
      
      </div>

    `;
  }
}

window.customElements.define('product-grid', ProductGrid);
export default ProductGrid;