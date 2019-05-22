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
                let { onAction, value } = this.props;
                if (onAction) {
                    onAction({ val: count * value }); // 
                }
            }, 0)
        })// async
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = `btn btn-sm ${value < 0 ? 'bg-danger' : 'bg-info'}`
        return (
            <div className="action">
                <div className="card card-body">
                    <button onClick={e => this.incrementCount()} 
                            className={className}>
                            {value}
                    </button>
                    <br /><span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;