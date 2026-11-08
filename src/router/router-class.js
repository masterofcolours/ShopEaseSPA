
class Router {
    constructor (routes) {
        this.pages = routes;
        this.outlet = null;
    }

    searchAndReturn (inputPath, data = this.pages){
        if(data.length > 0){
            for(let item of data){
                if(item.path instanceof RegExp && item.path){
                    
                    const match = inputPath.match(item.path);
                    
                    if(match){
                        return {
                            component: item.component,
                            params: { id: match[1] }
                        };
                    }
                }else{
                    if(item.path === inputPath){
                        return {
                            component: item.component,
                            params: { }
                        };
                    }
    
                    if(item.children){
                        const result = this.searchAndReturn(inputPath, item.children);
                        if(result) return result;
                    }
                }

            }
            return null;
        }else{
            return null;
        }
    }

    notFound(){
        return {
            name: "erorr 404 not find",
            path: window.location.pathname,
            component: null,
        }
    }

}

export default Router;