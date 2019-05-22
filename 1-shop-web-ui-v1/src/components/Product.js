import React, { Component } from 'react';
import classNames from 'classnames'


class Product extends Component {
    state = {
        currentTab: 1,
        reviews: [
            { stars: 4, author: 'who@mail.com', body: 'good one' },
            { stars: 1, author: 'who@mail.com', body: 'bad one' }
        ]
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })
    }
    renderTabPanel(product) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return <div>{product.description}</div>
            case 2: return <div>Not Yet</div>
            case 3: return <div>None Yet</div>
            default: return null;
        }
    }
    render() {
        // let product=this.props.value;
        // or
        let { value: product } = this.props;
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
                        <button className="btn btn-sm btn-primary">buy</button>
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