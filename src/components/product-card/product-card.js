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
            <style>
                :host {
                display: block;
            }

            .card {
                background-color: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 0.75rem;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
                height: 100%;
            }

            .card:hover {
                transform: translateY(-4px);
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .card > div:first-child {
                width: 100%;
                height: 200px;
                background-color: #f1f5f9;
                overflow: hidden;
                position: relative;
            }

            .card > div:first-child img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }

            .card:hover > div:first-child img {
                transform: scale(1.05);
            }

            .card > div:nth-child(2) {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            }

            .card > div:nth-child(2) > span:first-child {
            font-size: 0.75rem;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 0.25rem;
            }

            .card > div:nth-child(2) > div:nth-child(2) {
            margin-bottom: 0.5rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            }

            .card > div:nth-child(2) > div:nth-child(2) link-component {
            text-decoration: none;
            }

            .card > div:nth-child(2) > div:nth-child(2) link-component > p {
            font-weight: 600;
            color: #0f172a;
            margin: 0;
            font-size: 1rem;
            line-height: 1.4;
            }

            .card > div:nth-child(2) > div:nth-child(2) link-component:hover > p {
            color: #2563eb;
            }

            .card > div:nth-child(2) > div:nth-child(3) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            padding-top: 0.5rem;
            }

            .card > div:nth-child(2) > div:nth-child(3) > span {
            font-size: 1.125rem;
            font-weight: 700;
            color: #2563eb;
            }

            .card > div:nth-child(2) > div:nth-child(3) > button {
            background-color: #2563eb;
            color: #ffffff;
            border: none;
            padding: 0.25rem 1rem;
            font-size: 0.875rem;
            font-weight: 500;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
            }

            .card > div:nth-child(2) > div:nth-child(3) > button:hover {
            background-color: #1d4ed8;
            }

            @media screen and (max-width: 768px) {
            .card > div:first-child {
                height: 160px;
            }

            .card > div:nth-child(2) {
                padding: 0.75rem;
            }

            .card > div:nth-child(2) > div:nth-child(2) link-component > p {
                font-size: 0.9375rem;
            }

            .card > div:nth-child(2) > div:nth-child(3) > span {
                font-size: 1rem;
            }

            .card > div:nth-child(2) > div:nth-child(3) > button {
                padding: 0.25rem 0.75rem;
                font-size: 0.8125rem;
            }
            }

            @media screen and (max-width: 480px) {
            .card > div:first-child {
                height: 140px;
            }

            .card > div:nth-child(2) {
                padding: 0.5rem;
            }
            }
            </style>

            <div class="card">
                <div>
                    <img src="${this.image}" alt="${this.title}">
                </div>
                <div>
                    <span>${this.category}</span>
                    <div>
                        <link-component path="/product/${this.id}/" name="${this.title}">
                            <p>${this.title}</p>
                        </link-component>
                    </div>
                    <div>
                        <span>$${this.price}</span>
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