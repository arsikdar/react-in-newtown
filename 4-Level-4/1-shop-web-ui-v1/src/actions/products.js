
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
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading products' })  // async action
        api.loadProductsAsync(type, size)
            .then(response => {
                dispatch({ type: 'REQUEST_FINISHED', message: '' })  // async action
                dispatch({ type: 'LOAD_PRODUCTS', products: response.data })  // async action
            })
            .catch((error) => {
                dispatch({ type: 'REQUEST_ERROR', message: error.message })  // async action
            })
    }

}