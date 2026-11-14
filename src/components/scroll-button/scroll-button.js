
class ScrollBTN extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
            <style>
                .btn{
                    display: none;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    background-color: #2563eb;
                    position: fixed;
                    bottom: 20px;
                    left: 20px;
                    cursor: pointer;
                    border-radius: 50%;
                }

                .show{
                    display: flex;
                }

                .btn:hover{
                    opacity: 0.7;
                }
            </style>

            <div class="btn">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>

        `
    }

    connectedCallback(){
        this.render();
        const btn = this.shadowRoot.querySelector(".btn");
        window.addEventListener('scroll', function() {
            const totalHeight = document.documentElement.scrollHeight;
            console.log((window.scrollY / totalHeight) * 100);
            
            if ((window.scrollY / totalHeight) * 100 > 50) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        })

        btn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    }

    disconnectedCallback(){

    }

}

window.customElements.define("scroll-btn", ScrollBTN);

export default ScrollBTN;