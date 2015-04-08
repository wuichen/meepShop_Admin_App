import React from 'react';

let Header = React.createClass({
  render () {
    return (
      <header className="bar bar-nav">
        <a href={this.props.prepage} className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
        <h1 className="title">{this.props.text}</h1>
      </header>
    );
  }
})

export default Header;
