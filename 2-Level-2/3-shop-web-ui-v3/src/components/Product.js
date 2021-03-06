import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';
import axios from 'axios'

class Product extends Component {
    state = {
        currentTab: 1,
        reviews: []
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { value } = this.props;
                let id = value.id;
                let apiUrl = `http://0.0.0.0:8181/api/products/${id}/reviews`;
                axios
                    .get(apiUrl)
                    .then(response => {
                        this.setState({ reviews: response.data })
                    })
            }
        })
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
    }
    renderTabPanel(product) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return <div>{product.description}</div>
            case 2: return <div>Not Yet</div>
            case 3: return <div>{this.renderReviews()}</div>
            default: return null;
        }
    }
    handleBuy(e) {
        let { value, onBuy } = this.props;
        if (onBuy) {
            onBuy({ item: value, qty: 1 })
        }

    }
    render() {
        // let product=this.props.value;
        // or
        let { value: product, cartQty } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3">
                        <img src={product.image} className="img-fluid" alt={product.name} />
                    </div>
                    <div className="col-9 col-sm-9 col-md-9">
                        <h4>{product.name}</h4>
                        <h5>&#8377;{product.price}</h5>
                        <button onClick={e => this.handleBuy(e)} className="btn btn-sm btn-primary">buy</button>
                        &nbsp;
                        <input readOnly size="2" value={cartQty} />
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(e, 1)} className={classNames('nav-link', { active: currentTab === 1 })} href="/">Description</a>
                            </li>
                            <li className="nav-item">
                                 <a onClick={e => this.changeTab(e, 2)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Specification</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(e, 3)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                            </li>
                        </ul>
                        {this.renderTabPanel(product)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;