import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/Header';
import ContainerNav from './container/NavContainer';
import ReadContainer from './container/ReadContainer'
import ControlContainer from './container/ControlContainer'
import CreateContainer from './container/CreateButtonContainer'
import UpdateContainer from './container/UpdateContainer';

class App extends Component {
  render(){
    var article = null;
    if(this.props.mode ==='READ'){
      article = <ReadContainer></ReadContainer>
    } else if(this.props.mode ==='WELCOME'){
      article = <ReadContainer></ReadContainer>
    } else if(this.props.mode ==='CREATE'){
      article = <CreateContainer></CreateContainer>
    } else if(this.props.mode === 'UPDATE'){
      article = <UpdateContainer></UpdateContainer>
    }
    return (
      <div className="App">
        <Header/>
        <ContainerNav/>
        <ControlContainer/>
        {article}
      </div>
    );
  }
}

export default connect(
  function(state){
    return {
      mode:state.mode
    }
  }
)(App);
