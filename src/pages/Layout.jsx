import {Outlet, Link} from 'react-router-dom';
import React, { Component } from 'react';
import './Layout.css';

export default class Layout extends Component {
  render() {
    return (
      <>
      <nav>
        <ul className="ul">
            <li><Link to="/">HOME</Link></li>
            <li><Link className="li" to="/counter">Simple Counter</Link></li>
            <li><Link className="li" to="/calculator">Simple Calculator</Link></li>
            <li><Link className="li" to="/login">Simple Login</Link></li>
            <li><Link className="li" to="/todo">Simple ToDo</Link></li>
            <li><Link className="li" to="/fetch">Simple Fetch</Link></li>
            <li><Link className="li" to="/fimg">Simple Image Fetch</Link></li>
        </ul>
      </nav>
      <Outlet/>
      </>
    )
  }
}
