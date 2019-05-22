
import React, { Component } from 'react';

class Summary extends Component {
    render() {
        let { value } = this.props;
        let className = `alert ${value < 10 ? 'alert-info' : 'alert-warning'}`
        return (
            <div className={className}>
                Total Actions : {value}
            </div>
        );
    }
}

export default Summary;