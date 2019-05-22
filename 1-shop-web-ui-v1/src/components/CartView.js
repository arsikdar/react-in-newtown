
import React from 'react';

function renderCartItems(cart) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>qty</td>
                <td>total</td>
            </tr>
        )
    })
}

function CartView(props) {
    let { cart } = props;
    return (
        <div className="card">
            <div className="card-header">Items in cart</div>
            <div className="card-body">
                <table className="table table-sm table-bordered">
                    <tbody>
                        {renderCartItems(cart)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartView;