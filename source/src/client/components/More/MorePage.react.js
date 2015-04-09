import React from 'react';
import Header from '../Header.react';
import Footer from '../Footer.react';

let HomePage = React.createClass({
  render () {
    return (
      <div>
        <Header text='More' back="false" />
        <Footer isMoreSelected="true"/>
      </div>
    );
  }
})

export default HomePage;
