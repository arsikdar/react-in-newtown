import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios'

class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        let apiUrl = "http://0.0.0.0:8181/api/products";
        axios
            .get(apiUrl)
            .then(response => {
                this.setState({ products: response.data })
            })
    }

    renderProducts() {
        let { products } = this.state;
        let { cart } = this.props;
        return products.map((product, idx) => {
            let cartLine = cart[product.id];
            let cartQty = cartLine ? cartLine.qty : 0;
            return (
                <div key={idx} className="list-group-item">
                    <Product cartQty={cartQty} value={product} onBuy={e => this.props.onBuy(e)} />
                </div>
            )
        })
    } 

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

export default ProductList;