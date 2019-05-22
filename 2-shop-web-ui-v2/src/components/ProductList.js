import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    state = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 198000,
                image: 'images/Laptop.png',
                description: 'New Mac pro'
            },
            {
                id: 2,
                name: 'Mobile',
                price: 18000,
                image: 'images/Mobile.png',
                description: 'New  pro'
            },

        ]
    }

    renderProducts() {
        let { products } = this.state;
        return products.map((product, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product value={product} onBuy={e => this.props.onBuy(e)} />
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