import "../components/product-grid/product-grid.js"

class Shop extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
            <style>
                .section-title {
                    font-size: var(--font-size-2xl, 1.75rem);
                    font-weight: var(--font-weight-bold, 700);
                    color: var(--text-main, #0f172a);
                    margin-top: 0;
                    margin-bottom: var(--space-lg, 1.5rem);
                    text-align: center;
                }
            </style>
            <h2 class="section-title">Shop</h2>
            <product-grid></product-grid>

        `
    }

    connectedCallback(){
        this.render()
    }

}

window.customElements.define("shop-component", Shop)

export default Shop;