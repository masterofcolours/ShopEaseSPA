import changePage from "../../../utils/change-page.js";

class Link extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
            <link rel="stylesheet" href="/src/components/ui/link/link-style.css"/>
            <div class="custome-link">
                <slot></slot>
            </div>

        `
    }

    connectedCallback(){
        this.render();

        this.path = this.getAttribute("path");

        this.addEventListener("click", ()=>{
            if(this.path.includes("product/")){
                const targetPath = this.path;
                window.history.pushState({}, '', targetPath);
            }else{
                if(this.path  === "/"){
                    const targetPath = `/`;
                    window.history.pushState({}, '', targetPath);
                }else{
                    const targetPath = `/${this.getAttribute("name")}`;
                    window.history.pushState({}, '', targetPath);
                }            
            }
            
            changePage(this.path)
        })

    }

}

window.customElements.define("link-component", Link);

export default Link;