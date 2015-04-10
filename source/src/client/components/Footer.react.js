import React from 'react';

let styles = {
  footer: {
    backgroundColor: '#27DCE0'
  }
}

let Footer = React.createClass({
  render () {
    let isHomeSelected = this.props.isHomeSelected;
    let isOrderSelected = this.props.isOrderSelected;
    let isMessageSelected = this.props.isMessageSelected;
    let isNewsSelected = this.props.isNewsSelected;
    let isMoreSelected = this.props.isMoreSelected;
    return (
      <footer>
        <nav style={styles.footer} className="bar bar-tab">
          <a className={"tab-item" + (isHomeSelected === "true" ? " active" : "")} href="#">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </a>
          <a className={"tab-item" + (isOrderSelected === "true" ? " active" : "")} href="#/orders">
            <span className="icon icon-search"></span>
            <span className="tab-label">Order</span>
          </a>
          <a className={"tab-item" + (isMessageSelected === "true" ? " active" : "")} href="#/message">
            <span className="icon icon-info"></span>
            <span className="tab-label">Message</span>
          </a>
          <a className={"tab-item" + (isNewsSelected === "true" ? " active" : "")} href="#/news">
            <span className="icon icon-sound"></span>
            <span className="tab-label">News</span>
          </a>
          <a className={"tab-item" + (isMoreSelected === "true" ? " active" : "")} href="#/more">
            <span className="icon icon-more"></span>
            <span className="tab-label">More</span>
          </a>
        </nav>
      </footer>
    );
  }
})

export default Footer;
