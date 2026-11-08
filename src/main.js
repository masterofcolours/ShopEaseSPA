import './app.js';
import getData from './services/api.js';
import changePage from './utils/change-page.js';
document.addEventListener('DOMContentLoaded', () => {
    
    const appContainer = document.getElementById('root');
    
  if (appContainer){
    appContainer.innerHTML = '<app-component></app-component>';
  }

  getData()

});

window.addEventListener('popstate', () => {
  
  const currentPath = String(window.location.pathname).toLowerCase() === '/' 
  ? String(window.location.pathname).toLowerCase() :  
  String(window.location.pathname).toLowerCase().includes("product/") ? 
  String(window.location.pathname).toLowerCase() : String(window.location.pathname).toLowerCase() + "/";
  
  changePage(currentPath);
});