

/*


{
    "111":[
        {},{}
    ],
     "222":[
        {},{},{}
    ]
}

*/


export function reviewsReducer(state = {}, action) {
    let { type } = action;
    switch (type) {
        case 'LOAD_REVIEWS': {
            let { productId, reviews } = action;
            let prevReviews = state[productId] || []
            reviews = [...prevReviews, ...reviews]
            return { ...state, [productId]: reviews }
        }
        default: {
            return state;
        }
    }
}