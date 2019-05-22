import React, { Component } from 'react'


import store from './store'

export function connect(InputComponent, callback) {

    // Higher-Order-Components
    class Container extends Component {
        constructor(props) {
            super();
            let state = callback(store.getState())
            this.state = {
                ...state  // spread operator
            }
        }
        componentDidMount() {
            // subscription
        }
        componentWillUnmount() {
            // unsubscription
        }
        handleLogic() {
            //
        }
        render() {
            return (
                <div>
                    <InputComponent {...this.state} />
                </div>
            )
        }
    }

    return Container;

}