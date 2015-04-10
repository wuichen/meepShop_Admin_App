import React from 'react';

let styles = {
	header: {
		backgroundColor: '#27DCE0'
	},
	headerTitle: {
		color: 'white'
	}
}

let Header = React.createClass({
  render () {
    return (
      <header style={styles.header} className="bar bar-nav">
        <a href={this.props.prepage} className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
        <h1 style={styles.headerTitle} className="title">{this.props.text}</h1>
      </header>
    );
  }
})

export default Header;
