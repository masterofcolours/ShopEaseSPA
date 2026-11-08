
class NOtFind extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
            <link rel="stylesheet" href="./src/pages/404/404-style.css"/>
            <div class="not-found-container">
                <h1 class="error-code">404</h1>
                <h2 class="error-title">Page Not Found</h2>
                <p class="error-description">
                The page you are looking for doesn't exist or has been moved.
                </p>
                <div class="actions">
                <link-component path="/" name="home" class="btn btn-primary">
                    <p>Go Back Home</p>
                </link-component>
                <link-component path="/shop/" name="shop" class="btn btn-outline">
                    <p>Browse Products</p>
                </link-component>
                </div>
            </div>

        `
    }


    connectedCallback(){
        this.render()
    }

}

window.customElements.define("notfind-component", NOtFind);

export default NOtFind;