import React from 'react';
import './App.css';
import CartView from './components/CartView';
import Home from './components/Home'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductList from './components/ProductList';
import NotFound from './components/NotFound'
import CartBadge from './components/CartBadge'


class App extends React.Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">online shopping</a>
        </nav>
        <hr />
        <CartBadge />
        <hr />
        <Router>
          <div>
            <div className="container">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">Orders</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Sign-in</Link>
                </li>
              </ul>
            </div>
            <hr />
            <div className="container">
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/products" render={props => <ProductList />} />
                <Route path="/cart" render={props => <CartView />} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
