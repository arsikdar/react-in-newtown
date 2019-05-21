

import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount() {
        let { totalCount } = this.state;
        totalCount += 1;
        this.setState({ totalCount })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">Action Box : <span className="badge badge-danger">{totalCount}</span></div>
                <div className="car-body">
                    <Action value={10} onAction={e => this.incrementTotalCount()} />
                    <Action value={-10} onAction={e => this.incrementTotalCount()} />
                    <Action value={100} onAction={e => this.incrementTotalCount()} />
                    <div style={{ clear: 'both' }}>
                        <Summary value={totalCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionBox;