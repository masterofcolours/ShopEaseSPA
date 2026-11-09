import newStore from "../../store/cart-store.js";
import cartElement from "../../utils/cartElement.js";
import "../cart-item/cart-item.js";
import "../group-cart-item/cart-grop.js";
class Cart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
  }

  render(localStorageItems, price) {    

    this._products = localStorageItems || newStore.getStore().items;
    
    let safePrice = Number(price) || 0;
    
    let productsHTML = '';    

    for (let [index, item] of this._products.entries()) {

      if(item instanceof Object && item.arr){
        productsHTML += `
          <group-cart
            title="${item.arr[0].title}"
            price="${item.arr[0].price}"
            image="${item.arr[0].image}"
            id="${item.arr[0].id}"
            index="${item.arr.length}"
            category="${item.arr[0].category}"
          >
          </group-cart>

        `;
        
        continue;
      }    
      
      

      if (item.id) {
        productsHTML += `
          <cart-item
            title="${item.title}"
            price="${item.price}"
            image="${item.image}"
            id="${item.id}"
            category="${item.category}"
          >
          </cart-item>
        `;
      }      
    }

    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        width: 100%;
      }

      .cart {
        width: 380px;
        max-width: 100vw;
        max-height: 100vh;
        min-height: 100vh;
        overflow-y: auto;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 10000;
        background-color: var(--bg-surface, #ffffff);
        border-left: 2px solid var(--border-color, #e2e8f0);
        overflow-x: hidden;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        box-shadow: -4px 0 15px rgba(0, 0, 0, 0.05);
      }

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.25rem 1.25rem;
        border-bottom: 2px solid var(--border-color, #e2e8f0);
        flex-wrap: wrap;
        gap: 0.75rem;
        background-color: var(--bg-surface, #ffffff);
        position: sticky;
        top: 0;
        z-index: 10;
      }

      svg {
        cursor: pointer;
        transition: opacity 0.2s ease;
      }

      .close{

      }

      svg:hover {
        opacity: 0.7;
      }

      p {
        text-align: center;
        margin: 0;
        font-size: 0.875rem;
        color: var(--text-muted, #64748b);
      }

      .price {
        width: 48%;
        text-align: left;
      }

      .number {
        width: 48%;
        text-align: right;
      }

      h2 {
        width: 49%;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-main, #0f172a);
      }

      .checkout-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color, #2563eb);
        border-radius: 0.5rem;
        margin-top: 0.5rem;
        transition: background-color 0.2s ease;
      }

      .checkout-btn:hover {
        background-color: #1d4ed8;
      }

      .checkout-btn link-component {
        width: 100%;
        text-align: center;
        padding: 0.75rem 1rem;
        text-decoration: none;
        display: block;
      }

      .checkout-btn p {
        color: #ffffff;
        font-weight: 600;
        font-size: 0.9375rem;
        text-align: center;
      }

      @media screen and (max-width: 480px) {
        .cart {
          width: 100vw;
        }

        .top {
          padding: 1rem 0.875rem;
        }

        h2 {
          font-size: 1.125rem;
        }
      }
    </style>

    <div class="cart">
      <div class="top">
          <h2>Cart</h2>
          <div class="close" >
            <svg height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#2563eb;" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25 C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0 L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467 L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468 c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467 C19.033,16.725,19.033,17.138,18.78,17.394z"></path> </g> </g></svg>
          </div>
          <p class="price" >Total price: <strong>$${newStore.getStore().totalPrice ? newStore.getStore().totalPrice.toFixed(2) : safePrice.toFixed(2)}</strong></p>
          <p class="number" >Count: <strong>${newStore.getStoreCount()}</strong></p>
          <div class="checkout-btn" >
            <link-component path="/checkout/" name="checkout">
                <p style="color: white;" >Checkout</p>
            </link-component>
          </div>
      </div>
        ${productsHTML}
      </div>
    `;

    this.shadowRoot.querySelector("svg").addEventListener("click", ()=>{        
        this.shadowRoot.querySelector(".cart").style.display = "none";
        cartElement.state = false;
    })
  }

  connectedCallback(){
    this.render
    (
      JSON.parse(localStorage.getItem("products")), 
      Number(localStorage.getItem("price")), 
    );
    this.listbox = this.shadowRoot.querySelector(".list")
    cartElement.component = this;
    cartElement.element = this.shadowRoot.querySelector(".cart");
    cartElement.state = true;
    this.unSubscribe = newStore.subscribe(this);

  }


  disconnectedCallback(){
    this.unSubscribe(this);
  }

}

window.customElements.define('cart-component', Cart);
export default Cart;