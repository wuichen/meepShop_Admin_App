import React from 'react';
import Header from './Header.react';
import ProductList from './ProductList.react';
import orderStore from '../stores/OrderStore';
import Router from 'react-router';
let { Route, Redirect, RouteHandler, Link, RouteHandler} = Router;

let OrderDetailsPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    let { orderId } = this.context.router.getCurrentParams();
    return {
      order: orderStore.getOrderById(orderId),
    };
  },
  render () {
    return (
      <div>
        <Header prepage="#/orders" text='OrderDetails' back="true" />
        <div className="content">
          <ul className="table-view">
            <li className="table-view-cell media">
              <p>Order:</p>
              {this.state.order.orderNo}
            </li>
            <li className="table-view-cell media">
              <p>Items:</p>
              <ProductList products={this.state.order.products} orderId={this.state.order._id} />
            </li>
            <li className="table-view-cell media">
              <p>Price:</p>
              {this.state.order.currency.pay}$ {this.state.order.currency.payTotal}
            </li>
          </ul>
        </div>
      </div>
    );
  }
})

export default OrderDetailsPage;
