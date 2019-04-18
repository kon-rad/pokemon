import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="container">
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">Pokemon</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
            </ul>

        </div>
        </div>
      </nav>
    );
  }
}

export default Header;
