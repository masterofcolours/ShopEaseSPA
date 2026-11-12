import NOtFind from "../pages/404/404-page.js";
import About from "../pages/about-page.js";
import CheckoutPage from "../pages/checkout-page/checkout-page.js";
import ContactPage from "../pages/contact-page/contact-page.js";
import DashboardPage from "../pages/dashboard-page/dashboard-page.js";
import Home from "../pages/home-page.js";
import LoginPage from "../pages/login-page/login-page.js";
import RegisterPage from "../pages/register-page/register-page.js";
import SearchPage from "../pages/search-page/search-page.js";
import Shop from "../pages/shop-page.js";
import BrandsPage from "../pages/brand-page/brand-page.js";
import SingleProduct from "../pages/sproduct-page/product-page.js";
import Router from "./router-class.js";
import SonyPage from "../pages/brand-page/sub-brand-page/sony.js";
import ApplePage from "../pages/brand-page/sub-brand-page/apple.js";
import NikePage from "../pages/brand-page/sub-brand-page/nike.js";
import SamsungPage from "../pages/brand-page/sub-brand-page/samsung.js";
import AdidasPage from "../pages/brand-page/adidas.js";

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
        path: '/dashboard/', 
        component: DashboardPage,
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
            
        ]
    },

    {
        name: "contact",
        path: "/contact/",
        component: ContactPage,
    },

    { 
        path: /^\/product\/(\d+)\/?$/, 
        component: SingleProduct,
    },

    {
        name: "checkout",
        path: "/checkout/",
        component: CheckoutPage,
    },

    {
        name: "brand",
        path: "/brand/",
        component: BrandsPage,
        children: [
            {
                name: "apple",
                path: "/brand/apple/",
                component: ApplePage,
            },
            {
                path: "/brand/nike/",
                component: NikePage,
            },
            {
                path: "/brand/adidas/",
                component: AdidasPage,
            },
            {
                path: "/brand/samsung/",
                component: SamsungPage,
            },
            {
                path: "/brand/sony/",
                component: SonyPage,
            },
        ]
    }
]

const newRouter = new Router(routes);

export default newRouter;