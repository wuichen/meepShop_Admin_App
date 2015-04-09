import React from 'react';
import Header from '../Header.react';
import Footer from '../Footer.react';

let HomePage = React.createClass({
  render () {
    return (
      <div>
        <Header text='Message' back="false" />
        <Footer isMessageSelected="true"/>
      </div>
    );
  }
})

export default HomePage;
