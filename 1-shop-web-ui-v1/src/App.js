import React from 'react';
import './App.css';
import Product from './components/Product';

class App extends React.Component {
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
          <Product value={product}/>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">online shopping</a>
        </nav>
        <hr />
        <hr />
        <div className="container">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
