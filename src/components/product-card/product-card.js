import newStore from "../../store/cart-store.js";
import "../ui/link/link.js";
class Product extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.title = this.getAttribute('title') || 'Product Name';
        this.price = Number(this.getAttribute('price')) || '0.00';
        this.category = this.getAttribute('category') || 'Category';
        this.image = this.getAttribute('image') || '';
        this.id = Number(this.getAttribute('id')) || '';

        this.shadowRoot.innerHTML = 
        `
            <link rel="stylesheet" href="./src/components/product-card/product-card-style.css"/>

            <div class="card">
                <div class="image-container">
                <img src="${this.image}" alt="${this.title}">
                </div>
                <div class="content">
                <span class="category">${this.category}</span>
                <div>
                    <link-component path="/product/${this.id}/" name="${this.title}">
                        <p>${this.title}</p>
                    </link-component>
                </div>
                <div class="footer">
                    <span class="price">$${this.price}</span>
                    <button class="btn-add">Add to Cart</button>
                </div>
                </div>
            </div>
        `
    }

    connectedCallback(){
        this.render();
        const addbtn = this.shadowRoot.querySelector(".btn-add");
        addbtn.addEventListener("click", ()=>{
            newStore.setStore(
                {
                    object: this,
                    price: Number(this.price),
                }
            )            
        })
        
    }

    disconnectedCallback(){

    }

}

window.customElements.define("product-component", Product);

export default Product;