import React, { Component } from 'react';


// import store from '../store'
import { connect } from '../connect';
import { withCard } from '../withCard'
import { from } from 'rxjs';

class TopicList extends Component {
    // constructor(props) {
    //     super();
    //     this.state = {
    //         topics: store.getState().topics
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
    renderTopics() {
        // let { topics } = this.state;
        let { topics } = this.props;
        return topics.map((topic, idx) => {
            return (
                <li key={idx} className="list-group-item">{topic}</li>
            )
        })
    }
    render() {
        // return (
        //     <div className="card">
        //         <div className="card-header">Topics</div>
        //         <div className="card-body">
        //             {this.renderTopics()}
        //         </div>
        //     </div>
        // );
        return (
            <div>
                {this.renderTopics()}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        topics: state.topics
    }
}

const C1 = connect(TopicList, mapStateToProps);
const C2 = withCard(C1, "Topics");

export default C2;