import React from 'react';
import Header from '../Header.react';
import Footer from '../Footer.react';

let HomePage = React.createClass({
  render () {
    return (
      <div>
        <Header text='meepShop' back="false" />
        <Footer isHomeSelected="true"/>
      </div>
    );
  }
})

export default HomePage;
