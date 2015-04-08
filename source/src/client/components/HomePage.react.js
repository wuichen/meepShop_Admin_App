import React from 'react';
import Header from './Header.react';

let HomePage = React.createClass({
  render () {
    return (
      <div>
        <Header text='meepShop' back="false" />
      </div>
    );
  }
})

export default HomePage;
