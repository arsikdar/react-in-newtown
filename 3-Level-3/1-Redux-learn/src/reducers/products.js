



export function productsReducer(state = [], action) {
    console.log("products reducer-");
    let { type } = action;
    switch (type) {
        case 'LOAD_PRODUCTS': {
            let { products } = action;
            return [...state, ...products]
        }
        case 'BUY': {
            let { item } = action;
            let { id } = item;
            return state.filter(item => item.id !== id)
        }
        default: {
            return state;
        }
    }
}