
import React from 'react';
import { connect } from 'react-redux'
import { buy } from '../actions/cart'
import { bindActionCreators } from 'redux'

let total = 0.0;
function renderCartItems(cart, actions) {
    let keys = Object.keys(cart);
    return keys.map((key, idx) => {
        let itemLine = cart[key];
        let { item, qty } = itemLine;
        total += qty * item.price;
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{qty}</td>
                <td>&#8377;{qty * item.price}</td>
                <td><i onClick={e => actions.buy(item, 1)} className="fa fa-plus"></i></td>
                <td><i onClick={e => actions.buy(item, -1)} className="fa fa-minus"></i></td>
            </tr>
        )
    })
}

function CartView(props) {
    let { cart, actions } = props;
    return (
        <div className="card">
            <div className="card-header">Items in cart</div>
            <div className="card-body">
                <table className="table table-sm table-bordered">
                    <tbody>
                        {renderCartItems(cart, actions)}
                    </tbody>
                </table>
                <hr />
                Total : {total}
                <hr />
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ buy }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView);