


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
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading reviews' })  // async action
        api.loadReviewsAsync(productId, size)
            .then(response => {
                dispatch({ type: 'REQUEST_FINISHED', message: '' })  // async action
                dispatch({ type: 'LOAD_REVIEWS', productId, reviews: response.data })  // async action
            })
            .catch(err => {
                dispatch({ type: 'REQUEST_FINISED', message: 'Loading reviews failed' })  // async action
            })
    }

}