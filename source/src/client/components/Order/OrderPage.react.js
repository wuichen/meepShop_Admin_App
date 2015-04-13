import React from 'react';
import Header from '../Header.react';
import Footer from '../Footer.react';
import SearchBar from './SearchBar.react';
import Orderlist from './Orderlist.react';
import orderStore from '../../stores/OrderStore';


let OrderPage = React.createClass({
  getInitialState: function() {
    return {
      orders: orderStore.getAllOrders()
    };
  },
  componentDidMount () {
    orderStore.addChangeListener(this._onChange);
	},
	componentWillUnmount () {
    orderStore.removeChangeListener(this._onChange);
	},
  render () {
    //took out <SearchBar/> from below for now
    return (
      <div>
        <Header text='Order' back="false" />
        <div className="content">
          <Orderlist orders={this.state.orders} />
        </div>
        <Footer isOrderSelected="true"/>
      </div>
    );
  },
  _onChange () {
    this.setState({
      orders: orderStore.getAllOrders()
    });
  }
});

export default OrderPage;
