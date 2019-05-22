

import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.val;
        this.setState({ totalCount })
    }
    renderActions() {
        let numbers = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5];
        return numbers.map(number => {
            return <Action key={number} value={number} onAction={e => this.incrementTotalCount(e)} />
        })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">Action Box : <span className="badge badge-danger">{totalCount}</span></div>
                <div className="car-body">
                    {
                        // <Action value={10} onAction={e => this.incrementTotalCount(e)} />
                        // <Action value={-10} onAction={e => this.incrementTotalCount(e)} />
                        // <Action value={100} onAction={e => this.incrementTotalCount(e)} />
                    }
                    {this.renderActions()}
                    <div style={{ clear: 'both' }}>
                        <Summary value={totalCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionBox;