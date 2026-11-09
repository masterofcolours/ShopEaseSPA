import newRouter from "../router/router.js";

function changePage (path){    
    let route = newRouter.searchAndReturn(path);   
     
    newRouter.outlet.innerHTML = '';    

    if (!route) {
        path = '*'; 
        route = newRouter.searchAndReturn(path);
        window.history.replaceState({}, '', '/404');
    }

    if (route) {
        const params = route.params.id ? route.params.id: null;
        const componentInstance = new route.component(params);
        newRouter.outlet.appendChild(componentInstance);
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

export default changePage;