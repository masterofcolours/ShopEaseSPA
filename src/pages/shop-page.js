import "../components/product-grid/product-grid.js"

class Shop extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
            <product-grid></product-grid>

        `
    }

    connectedCallback(){
        this.render()
    }

}

window.customElements.define("shop-component", Shop)

export default Shop;