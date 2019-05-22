
import { connect } from 'react-redux'

import React from 'react';

function CartBadge(props) {
    let { cart } = props;
    let count = Object.keys(cart).length;
    return (
        <div>
            <div className="container">
                <i className="fa fa-shopping-cart"></i>
                &nbsp;<span className="badge badge-danger">{count}</span> item(s)
                </div>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartBadge);