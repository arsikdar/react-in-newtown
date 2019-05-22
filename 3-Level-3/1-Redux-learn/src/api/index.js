

import axios from 'axios';

let apiUrl = "http://localhost:8181/api/products";


export default {
    loadProductsAsync(type, size) {
        return axios.get(apiUrl)
    },
    loadReviewsAsync(id, size) {
        return axios.get(apiUrl + `/${id}/reviews`)
    }
}