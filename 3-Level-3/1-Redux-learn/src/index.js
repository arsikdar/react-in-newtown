console.log("-index.js-");


import 'bootstrap/dist/css/bootstrap.css';


import store from './store';

import { loadProducts } from './actions/products'
import { loadReviews } from './actions/reviews'
import { buy } from './actions/cart'



//----------------------------------------------------------
// App View
//----------------------------------------------------------

store.subscribe(() => {
    let cart = store.getState().cart;
    console.log("-------------------------");
    console.log(cart);
    console.log("-------------------------");
})




//----------------------------------------------------------
// ProductList View
//----------------------------------------------------------

store.subscribe(() => {
    let products = store.getState().products;
    console.log("-------------------------");
    console.log(products);
    console.log("-------------------------");
})




//-----------------------------------------------------------
// Other -View
//-----------------------------------------------------------



setTimeout(() => {
    let action = loadProducts('elec', 2)
    store.dispatch(action);
    setTimeout(() => {
        let action = loadReviews('5cc41a16721d9d27327d16be', 2)
        store.dispatch(action);
        setTimeout(() => {
            let action = buy({ id: '5cc41a16721d9d27327d16be' }, 1)
            store.dispatch(action);
        }, 3000);
    }, 3000);
}, 3000);

