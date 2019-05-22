import React, { Component } from 'react';
import Product from './Product';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadProducts } from '../actions/products'

class ProductList extends Component {

    componentDidMount() {
        let { actions } = this.props;
        actions.loadProducts('elec', 100)
    }

    renderProducts() {
        let { products } = this.props;
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

    renderStatus() {
        let { reqStatus } = this.props;
        if (reqStatus.message) {
            return (
                <div className="alert alert-warning">{reqStatus.message}</div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderStatus()}
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products || [],
        cart: state.cart,
        reqStatus: state.reqStatus
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ loadProducts }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);