import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header"></div>
        </div>
      </nav>
    );
  }
}
