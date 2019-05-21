import React, { Component } from 'react';
import C from './C';

class A extends Component {
    render() {
        return (
            <div className="card card-body">
                <span className="badge badge-dark">B component</span>
                <br />
                <C />
            </div>
        );
    }
}

export default A;