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
            <style>
                :host {
                display: block;
                width: 100%;
                }
                .product-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: var(--space-2xl, 3rem) var(--space-md, 1rem);
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--space-2xl, 3rem);
                align-items: start;
                }
                @media (max-width: 768px) {
                .product-container {
                    grid-template-columns: 1fr;
                    gap: var(--space-xl, 2rem);
                }
                }
                .image-gallery {
                background-color: var(--bg-subtle, #f1f5f9);
                border-radius: var(--radius-lg, 0.75rem);
                overflow: hidden;
                border: 1px solid var(--border-color, #e2e8f0);
                height: 400px;
                }
                .image-gallery img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                }
                .product-info {
                display: flex;
                flex-direction: column;
                gap: var(--space-md, 1rem);
                }
                .category {
                font-size: var(--font-size-sm, 0.875rem);
                font-weight: var(--font-weight-semibold, 600);
                color: var(--text-muted, #64748b);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                }
                .title {
                font-size: 2rem;
                font-weight: var(--font-weight-bold, 700);
                color: var(--text-main, #0f172a);
                margin: 0;
                line-height: 1.2;
                }
                .rating-stock {
                display: flex;
                gap: var(--space-lg, 1.5rem);
                font-size: var(--font-size-sm, 0.875rem);
                color: var(--text-muted, #64748b);
                }
                .rating {
                color: #f59e0b;
                font-weight: 600;
                }
                .price {
                font-size: 1.75rem;
                font-weight: var(--font-weight-bold, 700);
                color: var(--primary-color, #2563eb);
                }
                .description {
                font-size: var(--font-size-base, 1rem);
                color: var(--text-muted, #64748b);
                line-height: 1.6;
                margin: var(--space-sm, 0.5rem) 0;
                }
                .actions-row {
                display: flex;
                gap: var(--space-md, 1rem);
                align-items: center;
                margin-top: var(--space-md, 1rem);
                }
                .quantity-selector {
                display: flex;
                align-items: center;
                border: 1px solid var(--border-color, #e2e8f0);
                border-radius: var(--radius-md, 0.5rem);
                overflow: hidden;
                background-color: var(--bg-surface, #ffffff);
                }
                .quantity-selector button {
                background: none;
                border: none;
                padding: 0.75rem 1rem;
                cursor: pointer;
                font-size: 1rem;
                font-weight: bold;
                color: var(--text-main, #0f172a);
                transition: background-color 150s;
                }
                .quantity-selector button:hover {
                background-color: var(--bg-subtle, #f1f5f9);
                }
                .quantity-value {
                padding: 0 1rem;
                font-weight: 600;
                color: var(--text-main, #0f172a);
                }
                .btn-add-to-cart {
                flex-grow: 1;
                background-color: var(--primary-color, #2563eb);
                color: var(--text-inverse, #ffffff);
                border: none;
                padding: 0.85rem 2rem;
                font-size: var(--font-size-base, 1rem);
                font-weight: var(--font-weight-semibold, 600);
                border-radius: var(--radius-md, 0.5rem);
                cursor: pointer;
                transition: background-color var(--transition-fast, 150ms);
                }
                .btn-add-to-cart:hover {
                background-color: var(--primary-hover, #1d4ed8);
                }
            </style>

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