import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

/*
  function App() {
  return (
  <div className="App">
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
  Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
  >
  Learn React
  </a>
  </header>
  </div>
  );
  }
*/



class ContactCard extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className = "contactcard"> <h1> Name: {this.props.name} </h1>
        <p> Work: {this.props.work} </p>
        <p> Mobile:{this.props.mobile}</p>
        <p> Email: {this.props.email} </p>
      </div>


    );
  }
}
ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  work: PropTypes.string,
};

class Decrement extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: props.start
    };
  }
  dec = () =>{
    //var txt;
    if(this.state.number <= 0){
      if (window.confirm("Cannot be less than zero. Reset value back to 10?")) {
        this.reset();
      }
    }
    else{
      this.setState({number: this.state.number  - 1});
    }

  }
  reset = () => {
    this.setState({number:10 });
  }
  render(){
    return(
      <div> <p> {this.state.number} </p>
        <button type= "button" onClick={this.dec}> Decrement</button>
        <button type= "button" onClick={this.reset}> Reset </button>
      </div>

    );
  }
}

Decrement.propTypes = {
  start: PropTypes.number.isRequired
};

class App extends Component {
  render (){
    return (

      <div className = "container">
        <ContactCard name = "Jasper" mobile = "12345567" email = "asdsa"/>
        <ContactCard name = "sadsada" mobile = "12" email = "asdsa"/>



        <Decrement start = "10"/>
      </div>

    );

  }
}

export default App;
