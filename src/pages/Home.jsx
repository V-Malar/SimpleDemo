import logo from './logo.svg';
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2 style={{display: "flex", justifyContent: "center"}}>A simple counter, calculator, login page were created.</h2>
        <div><img style={{margin:"auto", width:"100%"}} src={logo} className="App-logo" alt="logo"/></div>
      </div>
    )
  }
}
