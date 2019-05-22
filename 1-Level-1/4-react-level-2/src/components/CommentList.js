import React, { Component } from 'react';


// import store from '../store'
import { connect } from '../connect'

class CommentList extends Component {
    // constructor(props) {
    //     super();
    //     this.state = {
    //         comments: store.getState().comments['java']
    //     }
    // }
    // componentDidMount() {
    //     // subscription
    // }
    // componentWillUnmount() {
    //     // unsubscription
    // }
    // handleLogic() {
    //     //
    // }
    renderComments() {
        // let { comments } = this.state;
        let { comments } = this.props;
        return comments.map((comment, idx) => {
            return (
                <li key={idx} className="list-group-item">{comment}</li>
            )
        })
    }
    render() {
        return (
            <div className="card" >
                <div className="card-header">Comments</div>
                <div className="card-body" style={{ backgroundColor: '#DEF' }}>
                    {this.renderComments()}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        comments: state.comments['java']
    }
}

export default connect(CommentList, mapStateToProps);