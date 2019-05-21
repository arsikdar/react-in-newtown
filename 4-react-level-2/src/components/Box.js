import React, { Component } from 'react';

class Box extends Component {
    renderChildren() {
        let children = this.props.children;
        return children.map((child, idx) => {
            return (
                <li key={idx} className="list-group-item">{child}</li>
            )
        })
    }
    render() {
        return (
            <div className="card card-body">
                <ul>
                    {this.renderChildren()}
                </ul>
            </div>
        );
    }
}

export default Box;