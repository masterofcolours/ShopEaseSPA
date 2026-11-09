import newStore from "../../store/cart-store.js";
import "../ui/link/link.js";
class GropCartItem extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.title = this.getAttribute('title') || 'Product Name';
        this.price = this.getAttribute('price') || '0.00';
        this.category = this.getAttribute('category') || 'Category';
        this.image = this.getAttribute('image') || '';
        this.id = this.getAttribute('id') || '';
        this.index = this.getAttribute('index') || '';

        this.shadowRoot.innerHTML = 
        `
            <style>
                :root {
                display: block;
                width: 100%;
                }

                .cart-item {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 2px solid var(--border-color, #e2e8f0);
                margin: 10px 0;
                padding: 15px 20px;
                box-sizing: border-box;
                background-color: #ffffff;
                gap: 1rem;
                }

                img {
                width: 100%;
                height: auto;
                display: block;
                }

                .image-container {
                width: 90px;
                min-width: 90px;
                height: 90px;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.5rem;
                background-color: #f8fafc;
                border: 1px solid var(--border-color, #e2e8f0);
                }

                .image-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                }

                .content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                flex-grow: 1;
                gap: 0.375rem;
                padding: 0 10px;
                }

                .content div {
                width: 100%;
                }

                .content .category {
                font-size: 1rem;
                font-weight: 600;
                color: #0f172a;
                line-height: 1.4;
                }

                .content .footer {
                font-size: 1rem;
                color: #2563eb;
                }

                .content .count {
                font-size: 0.875rem;
                color: #64748b;
                }

                .close {
                cursor: pointer;
                position: relative;
                top: auto;
                right: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                transition: opacity 0.2s ease;
                }

                .close:hover {
                opacity: 0.7;
                }

                @media screen and (max-width: 768px) {
                .cart-item {
                    padding: 12px 15px;
                    gap: 0.75rem;
                }

                .image-container {
                    width: 75px;
                    min-width: 75px;
                    height: 75px;
                }

                .content .category {
                    font-size: 0.9375rem;
                }

                .content .footer {
                    font-size: 0.9375rem;
                }

                .content .count {
                    font-size: 0.8125rem;
                }
                }

                @media screen and (max-width: 480px) {
                .cart-item {
                    padding: 10px;
                    gap: 0.5rem;
                }

                .image-container {
                    width: 60px;
                    min-width: 60px;
                    height: 60px;
                }

                .content {
                    padding: 0 5px;
                    gap: 0.25rem;
                }

                .content .category {
                    font-size: 0.875rem;
                }

                .content .footer {
                    font-size: 0.875rem;
                }

                .content .count {
                    font-size: 0.75rem;
                }

                .close svg {
                    width: 18px;
                    height: 18px;
                }
                }
                </style>

            <div class="cart-item">
                <div class="image-container">
                <img src="${this.image}" alt="${this.title}">
                </div>
                <div class="content">
                    <span class="category">${this.title}</span>
                    <div class="footer">
                        <strong><span class="price">$${this.price}</span></strong>
                    </div>
                    <div  class="count">
                        <strong>count: ${this.index}</strong>
                    </div>
                </div>
                <div class="close">
                    <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:var(--danger-color);" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25 C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0 L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467 L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468 c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467 C19.033,16.725,19.033,17.138,18.78,17.394z"></path> </g> </g></svg>
                </div>
            </div>
        `
    }

    connectedCallback(){
        this.render();
        this.shadowRoot.querySelector(".close").addEventListener("click", ()=>{            
            newStore.deleteStore(this.id, this.price)
            this.remove();
        })
        
    }

    disconnectedCallback(){

    }

}

window.customElements.define("group-cart", GropCartItem);

export default GropCartItem;