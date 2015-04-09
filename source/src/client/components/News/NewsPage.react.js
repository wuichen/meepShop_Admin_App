import React from 'react';
import Header from '../Header.react';
import Footer from '../Footer.react';

let HomePage = React.createClass({
  render () {
    return (
      <div>
        <Header text='News' back="false" />
        <Footer isNewsSelected="true"/>
      </div>
    );
  }
})

export default HomePage;
