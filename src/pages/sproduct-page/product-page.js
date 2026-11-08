import getData from "../../services/api.js";
import newStore from "../../store/cart-store.js";

class SingleProduct extends HTMLElement {
    constructor(id){
        super()
        this.id = id;
        this.count = 1;
        this.attachShadow({mode: "open"})
    }

    async render(){
        const results = await getData();        
        const product = results.find((item)=>{            
            return String(item.id) === String(this.id);
        })

        this.product = product;
        this.price = product.price;
        
        this.shadowRoot.innerHTML = 
        `
            <link rel="stylesheet" href="/src/pages/sproduct-page/product-page-style.css"/>

            <div class="product-container">
                <div class="image-gallery">
                <img src="${product.image}" alt="${product.title}">
                </div>

                <div class="product-info">
                <span class="category">${product.category}</span>
                <h1 class="title">${product.title}</h1>
                
                <div class="rating-stock">
                    <span class="rating">★ ${product.rating} / 5.0</span>
                    <span>In Stock: <strong>${product.stock} units</strong></span>
                </div>

                <div class="price">$${product.price.toFixed(2)}</div>
                
                <p class="description">${product.description}</p>

                <div class="actions-row">
                    <div class="quantity-selector">
                    <button class="btn-decrease">-</button>
                    <span class="quantity-value"> ${this.count} </span>
                    <button class="btn-increase">+</button>
                    </div>
                    
                    <button class="btn-add-to-cart">Add to Cart</button>
                </div>
                </div>
            </div>
            

        `

        const countElem = this.shadowRoot.querySelector(".quantity-value")

        this.shadowRoot.querySelector(".btn-increase").addEventListener("click", ()=>{
            this.count ++;
            countElem.textContent = this.count;
        })

        this.shadowRoot.querySelector(".btn-decrease").addEventListener("click", ()=>{
            if(this.count > 1){
                this.count --;
                countElem.textContent = this.count;
            }
        })

        this.shadowRoot.querySelector(".btn-add-to-cart").addEventListener("click", ()=>{
            for(let index = 1; index <= this.count; index++){
                newStore.setStore({object: product, price: this.price})
            }            
        })
    }

    connectedCallback(){

        this.render();

    }

}

window.customElements.define("singleproduct-component", SingleProduct);

export default SingleProduct;