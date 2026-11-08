import NOtFind from "../pages/404/404-page.js";
import About from "../pages/about-page.js";
import CheckoutPage from "../pages/checkout-page/checkout-page.js";
import Contact from "../pages/contact-page.js";
import Home from "../pages/home-page.js";
import LoginPage from "../pages/login-page/login-page.js";
import RegisterPage from "../pages/register-page/register-page.js";
import SearchPage from "../pages/search-page/search-page.js";
import Shop from "../pages/shop-page.js";
import SingleProduct from "../pages/sproduct-page/product-page.js";
import Router from "./router-class.js";

const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },

    { path: '*', component: NOtFind },

    {
        name: "shop",
        path: "/shop/",
        component: Shop,
    },

    { 
        path: '/register/', 
        component: RegisterPage,
    },

    { 
        name: "login",
        path: '/login/', 
        component: LoginPage, 
    },
    
    {
        name: "Search",
        path: "/search-page/",
        component: SearchPage,
    },

    {
        name: "about",
        path: "/about/",
        component: About,
        children: [

            {
                name: "contact",
                path: "/about/contact/",
                component: Contact,
            }
            
        ]
    },

    { 
        path: /^\/product\/(\d+)\/?$/, 
        component: SingleProduct,
    },

    {
        name: "checkout",
        path: "/checkout/",
        component: CheckoutPage,
    }
]

const newRouter = new Router(routes);

export default newRouter;