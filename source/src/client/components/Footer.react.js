import React from 'react';

let Footer = React.createClass({
  render () {
    return (
      <footer>
        <nav className="bar bar-tab">
          <a className="tab-item active" href="#">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </a>
          <a className="tab-item" href="#/orders">
            <span className="icon icon-search"></span>
            <span className="tab-label">Search</span>
          </a>
        </nav>
      </footer>
    );
  }
})

export default Footer;
