import newStore from "../../store/cart-store.js";
import cartElement from "../../utils/cartElement.js";
import returnSearchValueElement from "../../utils/search-bar.js";
import "../cart/cart.js";
import "../ui/link/link.js";


class Header extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
        <style>
            header {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 100;
                background-color: #ffffff;
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            }

            .flex {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                margin: 0;
                gap: 2px;
            }

            li {
                position: relative;
            }

            slot {
                position: relative;
            }

            .flex p {
                margin-block-end: 0;
                margin-block-start: 0;
            }

            li:hover .menu-item {
                display: flex;
            }

            .menu-item {
                display: none;
                flex-direction: column;
                align-items: center;
                width: 160px;
                min-width: max-content;
                height: auto;
                background-color: white;
                position: absolute;
                top: 100%; 
                left: 50%;
                transform: translateX(-50%);
                gap: 10px;
                border: 1px solid #e2e8f0;
                border-radius: 0.5rem;
                padding: 12px 0;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
                z-index: 10;
                margin-top: 5px;
            }

            .menu-item link-component {
                width: 100%;
                text-align: center;
                padding: 4px 12px;
                box-sizing: border-box;
                color: #0f172a;
                font-size: 0.85rem;
                text-decoration: none;
                transition: background-color 0.15s ease, color 0.15s ease;
            }

            .menu-item link-component:hover {
                background-color: #f8fafc;
                color: #2563eb;
            }

            .badge {
                position: absolute;
                background-color: red;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                color: white !important;
                top: -10px;
                right: -10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .cart-btn {
                position: relative;
            }

            header > div {
                padding: 1.5rem 1rem;
                border-bottom: 1px solid #e2e8f0;
            }

            header > div > div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1.5rem;
                max-width: 1200px;
                margin: 0 auto;
            }

            header link-component[path="/"] {
                display: flex;
                align-items: center;
                gap: 10px;
                text-decoration: none;
            }

            header link-component[path="/"] > div {
                display: flex;
                align-items: center;
                gap: 2px;
            }

            header link-component[path="/"] > div > span {
                font-size: 1.5rem;
                font-weight: 700;
                color: #2563eb;
                letter-spacing: -0.5px;
            }

            header > div > div > div:nth-child(2) {
                display: flex;
                flex: 1;
                max-width: 500px;
            }

            header input[type="text"] {
                width: 100%;
                padding: 0.5rem 1rem;
                font-family: system-ui, -apple-system, sans-serif;
                font-size: 0.875rem;
                color: #0f172a;
                background-color: #f8fafc;
                border: 1px solid #e2e8f0;
                border-right: none;
                border-radius: 0.5rem 0 0 0.5rem;
                outline: none;
            }

            header input[type="text"]:focus {
                border-color: #2563eb;
            }

            header > div > div > div:nth-child(2) > button {
                background-color: #2563eb;
                border: 1px solid #2563eb;
                border-radius: 0 0.5rem 0.5rem 0;
                cursor: pointer;
                padding: 0;
            }

            header > div > div > div:nth-child(2) > button > link-component {
                display: block;
                padding: 0.5rem 1rem;
                font-family: system-ui, -apple-system, sans-serif;
                font-size: 0.875rem;
                font-weight: 500;
                color: #ffffff;
                text-decoration: none;
            }

            header > div > div > div:nth-child(3) {
                display: flex;
                align-items: center;
                gap: 1.5rem;
            }

            header > div > div > div:nth-child(3) > link-component {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.25rem;
                color: #0f172a;
                text-decoration: none;
                font-size: 0.75rem;
                font-weight: 500;
            }

            header > div > div > div:nth-child(3) > link-component:hover {
                color: #2563eb;
            }

            header > div > div > div:nth-child(3) > link-component > p {
                margin: 0;
                font-size: 0.75rem;
                color: inherit;
            }

            header > div > div > div:nth-child(3) > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.25rem;
                color: #0f172a;
                font-size: 0.75rem;
                font-weight: 500;
                cursor: pointer;
            }

            header > div > div > div:nth-child(3) > div:hover {
                color: #2563eb;
            }

            header > div > div > div:nth-child(3) > div > span {
                font-size: 0.75rem;
                font-weight: 500;
                color: inherit;
            }

            header nav {
                background-color: #ffffff;
                padding: 0.5rem 1rem;
            }

            header nav > div {
                max-width: 1200px;
                margin: 0 auto;
            }

            header nav ul {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
                gap: 2rem;
            }

            header nav ul li > link-component {
                display: block;
                padding: 1rem 0;
                color: #0f172a;
                text-decoration: none;
                font-size: 0.875rem;
                font-weight: 500;
                border-bottom: 2px solid transparent;
            }

            header nav ul li > link-component > p {
                margin: 0;
                font-size: 0.875rem;
                font-weight: 500;
                color: inherit;
            }

            header nav ul li > link-component:hover {
                color: #2563eb;
                border-bottom-color: #2563eb;
            }

            @media screen and (max-width: 1024px) {
                header > div > div {
                    gap: 1rem;
                }
            }

            @media screen and (max-width: 992px) {
                header > div {
                    padding: 1rem;
                }

                header > div > div {
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                header > div > div > div:nth-child(2) {
                    order: 3;
                    flex: 0 0 100%;
                    max-width: 100%;
                    margin-top: 0.5rem;
                }

                header nav ul {
                    gap: 1.5rem;
                    overflow-x: auto;
                    white-space: nowrap;
                    padding-bottom: 0.25rem;
                    scrollbar-width: none;
                }

                header nav ul::-webkit-scrollbar {
                    display: none;
                }
            }

            @media screen and (max-width: 768px) {
                header > div {
                    padding: 0.75rem 1rem;
                }

                header > div > div {
                    gap: 0.5rem;
                }

                header link-component[path="/"] > div > span {
                    font-size: 1.25rem;
                }

                header link-component[path="/"] > div > svg {
                    width: 32px;
                    height: 32px;
                }

                header > div > div > div:nth-child(3) {
                    gap: 1rem;
                }

                header > div > div > div:nth-child(3) > link-component > p {
                    display: none;
                }

                header > div > div > div:nth-child(3) > div > span {
                    display: none;
                }

                header nav {
                    padding: 0.25rem 1rem;
                }

                header nav ul {
                    gap: 1.25rem;
                }

                header nav ul li > link-component {
                    padding: 0.5rem 0;
                    font-size: 0.75rem;
                }

                header nav ul li > link-component > p {
                    font-size: 0.75rem;
                }
                
                .menu-item {
                    width: 140px;
                    padding: 8px 0;
                    gap: 6px;
                }

                .menu-item link-component {
                    font-size: 0.75rem;
                }
            }

            @media screen and (max-width: 480px) {
                header {
                    width: 100%;
                }

                .nav-p {
                    font-size: 0.8rem;
                    margin: 0 5px;
                }

                .flex {
                    gap: 0;
                }

                .flex svg {
                    width: 15px !important;
                    height: 15px !important;
                }

                header > div {
                    padding: 0.5rem 0.75rem;
                }

                header link-component[path="/"] > div > span {
                    font-size: 1.1rem;
                }

                header link-component[path="/"] > div > svg {
                    width: 28px;
                    height: 28px;
                }

                header > div > div > div:nth-child(3) {
                    gap: 0.75rem;
                }

                header > div > div > div:nth-child(3) > link-component svg,
                header > div > div > div:nth-child(3) > div svg {
                    width: 18px;
                    height: 18px;
                }

                header input[type="text"] {
                    padding: 0.4rem 0.75rem;
                    font-size: 0.75rem;
                }

                header > div > div > div:nth-child(2) > button > link-component {
                    padding: 0.4rem 0.75rem;
                    font-size: 0.75rem;
                }

                nav {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                header nav ul {
                    gap: 1rem;
                    justify-content: flex-start;
                    width: 100%;
                }
            }
        </style>

            <header>
                <div>
                    <div>
                        <link-component path="/" name="home">
                            <div>
                                <svg width="44px" height="44px" viewBox="0 -17.5 177 177" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M13.9434 68.9343C12.0295 68.3318 10.3861 67.9458 8.849 67.3059C4.76458 65.606 2.24753 62.8059 1.30109 58.2043C0.24908 53.4623 0.896735 48.5013 3.13093 44.1882C9.12394 32.239 15.5626 20.56 24.2735 10.3087C28.1814 5.70905 32.806 2.83035 39.1967 2.47396C62.8479 1.06047 86.5568 0.888302 110.226 1.95767C116.16 2.24842 122.07 2.99391 127.997 3.45269C130.34 3.63384 132.702 3.69616 135.052 3.64562C138.387 3.57408 141.549 4.10965 144.376 5.94281C146.349 7.22266 148.455 8.39367 150.152 9.98529C160.582 19.7647 168.934 31.0535 174.542 44.2774C176.238 48.2758 176.15 52.3419 175.095 56.4709C173.336 63.3559 169.082 67.5632 162.011 68.8017C161.68 68.8667 161.354 68.954 161.035 69.0642C160.823 69.1299 160.625 69.2401 160.101 69.4698C159.851 74.3169 159.616 79.328 159.33 84.3359C158.689 95.5383 158.196 106.752 157.28 117.932C156.926 122.244 155.763 126.522 154.643 130.73C153.653 134.448 150.981 136.806 147.348 138.06C142.264 139.869 136.908 140.793 131.511 140.791C107.149 140.616 82.7875 140.441 58.4261 140.266C49.7822 140.207 41.1348 140.295 32.4948 140.079C29.1326 140.001 25.7892 139.552 22.5251 138.742C16.1068 137.123 12.0118 132.95 11.7421 126.197C11.3483 116.344 11.1298 106.458 11.4737 96.6088C11.7671 88.2175 12.9609 79.8584 13.7524 71.4841C13.822 70.7156 13.8706 69.9391 13.9434 68.9343ZM97.5157 133.039C97.6601 132.665 97.7651 132.276 97.8301 131.88C98.0513 121.116 98.3059 110.352 98.4379 99.5846C98.4812 96.0771 98.7194 92.6589 100.039 89.3582C101.713 85.1721 104.714 82.8834 109.237 82.701C113.948 82.5106 118.661 82.2875 123.374 82.2415C126.175 82.2054 128.974 82.359 131.754 82.701C133.287 82.8184 134.738 83.4446 135.875 84.4803C137.011 85.5166 137.77 86.9028 138.029 88.419C138.581 90.9341 138.906 93.4931 139.001 96.0666C139.364 107.923 139.603 119.784 139.89 131.827C140.62 131.667 141.561 131.402 142.52 131.265C145.357 130.858 146.84 129.209 147.23 126.417C147.649 123.422 148.393 120.452 148.554 117.446C149.327 102.99 149.963 88.5266 150.615 74.0622C150.711 71.9495 150.629 69.8289 150.629 68.3127L141.069 60.1532C138.406 64.3137 134.456 67.1162 128.916 67.3131C123.456 67.51 118.959 65.4095 115.253 61.5982C106.817 69.504 96.3376 69.2349 88.01 60.9355C84.641 66.1954 79.5498 68.1552 73.6001 67.9583C67.8755 67.768 62.6227 66.0706 58.4425 61.7151C54.8044 66.1336 50.4148 68.5254 44.9147 68.6724C39.631 68.8516 34.468 67.069 30.4201 63.6685C29.3274 65.2438 27.8865 66.5465 26.2093 67.4752C24.5321 68.404 22.6635 68.9336 20.7484 69.0242C20.6184 69.4285 20.5209 69.8433 20.457 70.2634C20.0691 80.581 19.5203 90.8973 19.372 101.219C19.2624 108.842 19.5571 116.479 19.8971 124.099C20.1314 129.311 22.0919 131.384 27.3137 131.865C33.0042 132.39 38.7294 132.647 44.4442 132.763C54.2078 132.96 63.9754 132.983 73.7418 133.032C81.5989 133.07 89.4487 133.039 97.5157 133.039ZM129.248 90.665C123.144 90.8842 117.672 91.0187 112.209 91.2977C108.323 91.4946 107.885 91.937 107.071 95.6354C106.904 96.5143 106.811 97.4062 106.794 98.3015C106.309 108.704 106.17 119.132 104.329 129.43C104.216 130.586 104.207 131.75 104.301 132.908H129.248V90.665ZM68.8928 10.8227C67.7915 16.9437 66.7269 22.6564 65.7423 28.3823C64.5083 35.5469 63.4629 42.7461 62.0898 49.8831C61.3285 53.8396 62.5559 57.5868 66.2248 59.0885C68.7084 60.0754 71.341 60.6342 74.0109 60.7413C77.6635 60.904 80.3393 59.0582 81.9979 55.6518C83.4143 52.7435 84.2951 49.8556 83.5403 46.5976C83.2732 45.3934 83.1504 44.162 83.1734 42.9288C83.287 33.7473 83.453 24.5666 83.5941 15.3857C83.6171 13.8709 83.5974 12.3553 83.5974 10.8227H68.8928ZM129.461 11.9325C131.458 16.7172 133.301 21.0359 135.067 25.3874C137.883 32.3216 140.646 39.2777 143.44 46.2198C143.605 46.6294 143.768 47.1976 144.097 47.3578C146.36 48.4624 146.883 50.7407 147.877 52.7149C150.256 57.4405 153.959 60.0971 159.406 59.8884C164.78 59.6823 168.128 54.492 166.304 49.4047C163.755 42.5721 160.224 36.1474 155.823 30.3324C151.169 23.9955 146.275 17.9039 139.765 13.2577C136.591 10.9907 133.413 11.0917 129.461 11.9325ZM61.7216 11.1448H49.8562C49.4591 12.1083 49.1435 12.812 48.8757 13.5327C43.8403 27.0762 38.8338 40.6316 33.7445 54.1548C33.4715 54.707 33.4087 55.3399 33.5679 55.935C33.727 56.5302 34.0973 57.0468 34.6096 57.389C38.4413 60.567 42.827 61.5636 47.5007 59.949C49.1524 59.3109 50.5215 58.1031 51.3607 56.5439C52.6609 53.8191 53.6316 50.9488 54.2523 47.9943C56.776 36.5084 59.1297 24.9805 61.526 13.4644C61.6384 12.6968 61.7039 11.9233 61.7216 11.1477V11.1448ZM90.8217 11.2592C90.722 11.4821 90.653 11.7174 90.6163 11.9588C90.8657 24.2901 90.9484 36.6285 91.4695 48.9487C91.6914 54.221 95.2428 59.3254 102.348 58.5713C107.764 57.9963 111.626 51.9683 109.865 46.8069C108.606 43.1143 107.658 39.3084 106.705 35.5181C104.689 27.5048 102.762 19.4687 100.753 11.2579L90.8217 11.2592ZM42.7941 11.4396C40.9741 11.6162 39.5413 11.8275 38.1026 11.8787C35.0973 11.9844 32.9772 13.282 31.0594 15.7046C22.7292 26.2276 16.429 37.9779 10.1084 49.7165C9.18052 51.6316 8.51965 53.6648 8.14409 55.7594C7.62821 58.1104 8.18544 59.1258 10.3586 60.0256C13.4678 61.3602 16.8903 61.7907 20.2331 61.2675C22.4167 60.9183 23.4906 59.6056 24.1896 57.6576C26.2971 51.7716 28.3134 45.8436 30.6722 40.0586C34.5144 30.633 38.5995 21.3076 42.7941 11.4422V11.4396ZM108.213 11.3018C108.168 11.7104 108.171 12.1227 108.223 12.5306C113.571 25.6363 116.631 39.4218 120.238 53.0421C120.445 53.9168 120.856 54.7301 121.438 55.4152C122.02 56.1003 122.756 56.638 123.585 56.9837C127.064 58.5189 130.839 58.579 133.248 54.5176C134.276 52.7848 135.948 51.4198 134.548 48.8239C128.998 38.5345 125.276 27.5194 122.227 16.2625C121.852 14.8783 121.338 13.5312 120.862 12.0879L108.213 11.3018Z" fill="#2563eb"></path> <path d="M58.8208 76.022C66.2442 76.4538 73.5315 76.7558 80.7959 77.3386C86.8998 77.8289 89.6282 80.3965 89.8232 86.5024C90.0247 93.1097 89.8428 99.723 89.2791 106.309C88.8131 111.815 86.1746 114.626 80.0083 114.617C68.3452 114.599 56.6811 115.033 45.016 115.158C42.3247 115.152 39.6389 114.916 36.9876 114.453C31.141 113.508 28.0949 110.128 28.1067 104.059C28.1185 98.0113 28.4802 91.9506 28.9875 85.9215C29.1416 83.7188 30.0808 81.6448 31.6345 80.0762C33.1883 78.5075 35.2534 77.5486 37.4544 77.3734C44.6019 76.7341 51.7789 76.4492 58.8208 76.022ZM80.9954 106.748C82.5385 100.3 82.8876 93.6236 82.0272 87.0491C81.9517 86.4203 81.0092 85.6603 80.3056 85.3978C79.2364 85.0532 78.1193 84.8806 76.997 84.8884C70.6003 84.683 64.2014 84.408 57.8028 84.3982C52.4169 84.3903 47.0251 84.6193 41.6451 84.9127C36.0518 85.2179 34.787 86.6422 34.9097 92.185C34.9793 95.3262 35.1598 98.4668 35.3475 101.604C35.6166 106.107 36.0399 106.834 40.4315 106.953C51.5335 107.253 62.6426 107.302 73.7494 107.358C76.0834 107.37 78.4199 106.976 80.9954 106.748Z" fill="#2563eb"></path> </g></svg>
                                <span>ShopEase</span>
                            </div>
                        </link-component>

                        <div>
                            <input class="search-input" type="text" placeholder="Search products, categories...">
                            <button type="submit">
                                <link-component name="Search" path="/search-page/"> Search </link-component>
                            </button>
                        </div>

                        <div>
                            <link-component name="login" path="/login/">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <p>Account</p>
                            </link-component>
                            <div class="cart-btn" >
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                <span>Cart</span>
                                    ${this.renderCartIcon()}
                            </div>
                        </div>
                    </div>
                </div>

                <nav>
                    <div>
                        <ul>
                            <li>
                                <link-component name="home" path="/">
                                    <div class="flex">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22L2 22" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 11L10.1259 4.49931C11.2216 3.62279 12.7784 3.62279 13.8741 4.49931L22 11" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 22V9.5" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 22V9.5" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393C9 14.8787 9 15.5858 9 17V22" stroke="#2563eb" stroke-width="1.5"></path> <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="#2563eb" stroke-width="1.5"></path> </g></svg>                                        
                                        <p class="nav-p">Home</p>
                                    </div>
                                </link-component>
                            </li>
                            <li>
                                <link-component name="shop" path="/shop/">
                                    <div class="flex">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#2563eb;stroke-miterlimit:10;stroke-width:1.91px;}</style> </defs> <g id="cart"> <circle class="cls-1" cx="10.07" cy="20.59" r="1.91"></circle> <circle class="cls-1" cx="18.66" cy="20.59" r="1.91"></circle> <path class="cls-1" d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"></path> <polyline class="cls-1" points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"></polyline> </g> </g></svg>
                                        <p class="nav-p">Shop</p>
                                    </div>
                                </link-component>
                            </li>
                            <li>
                                <link-component name="brands" path="/brand/">
                                    <div class="flex">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        <p class="nav-p">Brands</p>
                                    </div>

                                    
                                    </link-component>
                                    <div slot="menu" class="menu-item">
                                        <link-component path="/brand/apple/" name="brand/apple"> Apple </link-component>
                                        <link-component path="/brand/nike/" name="brand/nike"> Nike </link-component>
                                        <link-component path="/brand/adidas/" name="brand/adidas"> Adidas </link-component>
                                        <link-component path="/brand/samsung/" name="brand/samsung"> Samsung </link-component>
                                        <link-component path="/brand/sony/" name="brand/sony"> Sony </link-component>
                                    </div>
                            </li>
                            <li>
                                <link-component name="blog" path="/blog/">
                                    <div class="flex">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        <p class="nav-p">Blog</p>
                                    </div>
                                </link-component>
                            </li>
                            <li>
                                <link-component name="about" path="/about/">
                                    <div class="flex">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 17H13M9 13H13M9 9H10M17 18V21M17 15H17.01M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H13M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11.5" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        <p class="nav-p">About</p>
                                    </div>
                                </link-component>
                            </li>
                            <li>
                                <link-component name="contact" path="/contact/">
                                    <div class="flex">
                                        <svg fill="#2563eb" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20,1H4A1,1,0,0,0,3,2V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V2A1,1,0,0,0,20,1ZM19,21H5V3H19ZM9,8.5a3,3,0,1,1,3,3A3,3,0,0,1,9,8.5Zm-2,9a5,5,0,0,1,10,0,1,1,0,0,1-2,0,3,3,0,0,0-6,0,1,1,0,0,1-2,0Z"></path></g></svg>
                                        <p class="nav-p">Contact</p>
                                    </div>
                                </link-component>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        `
        this.returnSearchValue()
        
        ;

        this.unSubscribe = newStore.subscribe(this);
        this.shadowRoot.querySelector(".cart-btn").addEventListener("click", ()=>{
            cartElement.component.render()
            cartElement.state = true;
        })


    }

    renderCartIcon(){
        return `<span class="badge">${newStore.getStoreCount()}</span>`
    }

    returnSearchValue(){
        returnSearchValueElement.input = this.shadowRoot.querySelector(".search-input");
    }


    connectedCallback(){
        this.render();
        this.returnSearchValue();
        
    }

    disconnectedCallback(){
        this.unSubscribe(this);
    }

}

window.customElements.define("header-component", Header);

export default Header;