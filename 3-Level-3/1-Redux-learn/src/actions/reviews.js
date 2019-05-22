


import api from '../api'

export function loadReviews(productId, size) {
    //...
    // let reviews = [
    //     { stars: 1, author: 'author1', body: "bla bla" },
    //     { stars: 2, author: 'author2', body: "bla bla" },
    // ]
    // return { type: 'LOAD_REVIEWS', productId, reviews }

    // thunk
    return function (dispatch) {
        api.loadReviewsAsync(productId, size)
            .then(response => {
                dispatch({ type: 'LOAD_REVIEWS', productId, reviews: response.data })  // async action
            })
    }

}