

import React, { Component } from 'react'

export function withCard(InputComponent, title) {

    // Higher-Order-Components
    class Container extends Component {
        render() {
            return (
                <div className="card">
                    <div className="card-header">{title}</div>
                    <div className="card-body">
                        <InputComponent />
                    </div>
                </div>
            )
        }
    }

    return Container;

}