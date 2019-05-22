import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import PropTypes from 'prop-types';

import Greeting from './components/Greeting'

class App extends Component {

  state = {
    message: 'greetings'
  }

  constructor(props) {
    super();
    console.log("App :: constructor()");
    //console.log(props);  
    this.state = {
      message: props.message
    }
  }

  changeMessage(message) {
    this.setState({ message })
  }

  render() {
    console.log("App :: render()");
    // let title = this.props.title;
    // let trainer = this.props.trainer;
    // or
    let { title, trainer } = this.props; // de-structuring syntax
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>
          <span className="badge badge-info">{title}</span>
          &nbsp;by&nbsp;
          <span className="badge badge-dark">{trainer}</span></h1>
        <hr />
        <button onClick={e => { this.changeMessage('good morning') }} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => { this.changeMessage('good noon') }} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => { this.changeMessage('good evening') }} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => { this.changeMessage('') }} className="btn btn-danger">Remove</button>&nbsp;
        <hr />

        {message ? <Greeting message={message} /> : null}


      </div>
    );
  }

  componentDidMount() {
    console.log("App :: componentDidMount()");
    // setTimeout(() => {
    //   let message = "Hello React, heraed u r rocking at browser!"
    //   this.setState({ message })
    // }, 3000)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App :: componentDidUpdate()");
  }

}

App.defaultProps = {
  trainer: 'Unknown'
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}


export default App;
