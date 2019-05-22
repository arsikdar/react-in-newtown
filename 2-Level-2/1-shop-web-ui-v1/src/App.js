import React from 'react';
import './App.css';
import Product from './components/Product';
import CartView from './components/CartView';

class App extends React.Component {
  state = {
    isCartOpen: false,
    cart: [],
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

  toggleCart(e) {
    e.preventDefault();
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(e) {
    let { item, qty } = e;
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }

  renderProducts() {
    let { products, isCartOpen } = this.state;
    if (!isCartOpen)
      return products.map((product, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Product value={product} onBuy={e => this.addToCart(e)} />
          </div>
        )
      })
  }
  renderCart() {
    let { cart, isCartOpen } = this.state;
    if (isCartOpen)
      return <CartView cart={cart} />
  }
  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">online shopping</a>
        </nav>
        <hr />
        <div className="container">
          <i className="fa fa-shopping-cart"></i>
          &nbsp;<span className="badge badge-danger">{cart.length}</span> item(s)
        </div>
        <hr />
        <div className="container">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a onClick={e => this.toggleCart(e)} class="nav-link" href="/">{isCartOpen ? 'Products' : 'Cart'}</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          {this.renderCart()}
          {this.renderProducts()}
        </div>
      </div >
    );
  }
}

export default App;
