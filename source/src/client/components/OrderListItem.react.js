import React from 'react';
import Router from 'react-router';
let { Route, Redirect, RouteHandler, Link, RouteHandler} = Router;

let OrderListItem = React.createClass({
  render: function () {
    return (
      <li className="table-view-cell">
        <Link to="orderDetails" params={{orderId: this.props.orderId}}>
          <p>{this.props.order.orderNo}</p>
          <p>{this.props.order.currency.pay}$ {this.props.order.currency.payTotal}</p>
        </Link>
      </li>
    )
  }
})

export default OrderListItem;
