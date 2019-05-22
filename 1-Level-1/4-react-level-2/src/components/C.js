import React, { Component } from 'react';
import ColoContext from './ColorContext'

class C extends Component {
    render() {
        return (
            <div className="card card-body">
                <span className="badge badge-dark">C component</span>
                <br />
                => &nbsp;
                <ColoContext.Consumer>
                    {value => value}
                </ColoContext.Consumer>
            </div>
        );
    }
}

export default C;