import { supabase } from "../../../services/supabaseClient.js";
import changePage from "../../../utils/change-page.js";

class Link extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
            <style>
                :host {
                    display: inline-block;
                    cursor: pointer;
                }

                .custom-link {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    padding: var(--space-sm, 0.5rem) var(--space-md, 1rem);
                    background-color: var(--primary-color, #2563eb);
                    color: var(--text-inverse, #ffffff);
                    border-radius: var(--radius-md, 0.5rem);
                    font-weight: var(--font-weight-medium, 500);
                    transition: background-color var(--transition-fast, 150ms);
                }

                slot{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                span{
                    display: block;
                    width: 100%;
                }

                .custom-link:hover {
                    background-color: var(--primary-hover, #1d4ed8);
                }

                .custom-link p {
                    margin: 0;
                }

                .custom-link p {
                color: var(--text-muted);
                text-decoration: none;
                margin-left: var(--space-md);
                transition: color var(--transition-fast);
                }

                p:hover {
                color: var(--primary-color);
                }

            </style>
            <div class="custome-link">
                <slot></slot>
            </div>

        `
    }

    connectedCallback(){
        this.render();

        this.path = this.getAttribute("path");

        this.addEventListener("click", async ()=>{

            if(this.path === "/login/"){
                const { data: { session }, error } = await supabase.auth.getSession();
                if (error || !session) {
                    const targetPath = this.path;
                    window.history.pushState({}, '', targetPath);
                    changePage("/login/")
                    return;
                }

                const targetPath = "/dashboard/";
                window.history.pushState({}, '', targetPath);
                changePage("/dashboard/")
                return;

            }else{

                if(this.path.includes("product/")){
                    const targetPath = this.path;
                    window.history.pushState({}, '', targetPath);
                }else{
                    if(this.path  === "/"){
                        const targetPath = `/ShopEaseSPA`;
                        window.history.pushState({}, '', targetPath);
                    }else{
                        const targetPath = `/${this.getAttribute("name")}`;
                        window.history.pushState({}, '', targetPath);
                    }            
                }
                changePage(this.path)
            }


        })

    }

}

window.customElements.define("link-component", Link);

export default Link;