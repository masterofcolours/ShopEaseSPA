import cartElement from "../utils/cartElement.js";

class createStore{

  constructor(initialState){
    this.state = initialState;
    if(!this.state.items){
      this.state.items = []
    }

    if(!this.state.totalPrice){
      this.state.totalPrice = 0;
    }

    if(this.state.items.length === 0){
      this.state.totalPrice = 0;
    }

    this.listeners = new Set();
  }

  getStore(){
    return this.state;
  }

  getStoreCount(){
    let count = 0;    
    
    for(let [index, item] of this.state.items.entries()){
      if(item instanceof Object && item.arr){
        count = count + item.arr.length;
      }else{
        count = count + 1;
      }
    }    

    return count;

  }

  deleteStore(id, price){
    for(let [index, item] of this.state.items.entries()){
      if(Number(item.id) === Number(id)){
        if(item instanceof Object && item.arr){
            item.arr.pop();
            if(item.arr.length <= 1){
              this.state.items.splice(index, 1, item.arr[0])
            }
        }else{
          this.state.items.splice(index, 1)
        }
      }
    }

    this.state.totalPrice -= Number(price);

    if(this.state.totalPrice < 0){
      this.state.totalPrice = 0;
    }
    
    localStorage.setItem("products", JSON.stringify(this.state.items));
    localStorage.setItem("price", this.state.totalPrice);

    this.listeners.forEach(component => {
      if(component !== cartElement.component){
        component.render()
      }else if(cartElement.state){
        component.render()
      }
    })

  }

  setStore(newStore){
    newStore.object.id = Number(newStore.object.id);
    let result = false;    
    for(let [index, item] of this.state.items.entries()){
      if(item instanceof Object && item.arr){
        if(item.id == newStore.object.id){
          item.arr.push(newStore.object);
          result = true;
          break;
        }
      }

      if(item.id == newStore.object.id && !item.arr){        
        const newObject = {"id": item.id, "arr": [item , newStore.object]}
        this.state.items.splice(index, 1, newObject)
        result = true;
        break;
      }
    }

    if(!result){      
      const newObj = {
        id: newStore.object.id,
        image: newStore.object.image,
        price: newStore.object.price,
        title: newStore.object.title,
        category: newStore.object.category,
      }
      this.state.items.push(newObj);      
    }    

    this.state.totalPrice += newStore.price;

    if(this.state.totalPrice < 0){
      this.state.totalPrice = 0;
    }

    localStorage.setItem("products", JSON.stringify(this.state.items));
    localStorage.setItem("price", this.state.totalPrice);

    this.listeners.forEach(component => {
      if(component !== cartElement.component){
        component.render()
      }else if(cartElement.state){
        component.render()
      }
    })
  }

  subscribe(component){
    this.listeners.add(component);
    return () => this.listeners.delete(component)
  }

}

const newStore = new createStore(
      {
        items: JSON.parse(localStorage.getItem("products")),
        totalPrice: Number(localStorage.getItem("price")),
      }
)

export default newStore;