
import api from '../api'

export function loadProducts(type, size) {
    //...
    // let products = [
    //     { id: 111, name: 'item-1', price: 100 },
    //     { id: 222, name: 'item-2', price: 200 }
    // ]
    // return { type: 'LOAD_PRODUCTS', products }  // sync action

    // thunk
    return function (dispatch) {
        api.loadProductsAsync(type, size)
            .then(response => {
                dispatch({ type: 'LOAD_PRODUCTS', products: response.data })  // async action
            })
    }

}