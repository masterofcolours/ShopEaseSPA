import newRouter from "./router/router.js";
import changePage from "./utils/change-page.js";
import "./components/header/header.js";
import "./components/footer/footer.js";
import "./pages/home-page.js"

class App extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML =
        `

            <style>
                main{
                    padding-top: 180px;
                }
            </style>
            <header-component></header-component>

            <cart-component></cart-component>

            <main id="router-outlet"></main>

            <footer-component></footer-component>


        `
    }

    initRouter() {
        const outlet = this.shadowRoot.getElementById('router-outlet');
        outlet.insertAdjacentElement
        newRouter.outlet = outlet;
    }
    
    connectedCallback(){
        this.render();
        this.initRouter();
        changePage("/");
    }
}

window.customElements.define("app-component", App)

export default App;