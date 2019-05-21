import React, { Component } from 'react';

import './Action.css';

class Action extends Component {
    state = {
        count: 0
    }
    incrementCount() {
        let { count } = this.state;
        count += 1;
        this.setState({ count }, () => {
            setTimeout(() => {
                let { onAction } = this.props;
                if (onAction) {
                    onAction();
                }
            }, 0)
        })// async
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div className="action">
                <div className="card card-body">
                    <button onClick={e => this.incrementCount()} className="btn btn-sm btn-primary">{value}</button>
                    <br /><span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;