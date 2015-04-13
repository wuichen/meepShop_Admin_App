import React from 'react';
import Router from 'react-router';
import SearchModeStore from '../../stores/SearchModeStore';
import SearchModeAction from '../../actions/SearchModeAction';

let { Route, Redirect, RouteHandler, Link, RouteHandler} = Router;

let OrderListItem = React.createClass({
  closeSearchMode () {
    SearchModeAction.change({
      action: 'close'
    });
  },
  render () {
    return (
      <li className="table-view-cell">
        <Link onClick={this.closeSearchMode} to="orderDetails" params={{orderId: this.props.orderId}}>
          <p>{this.props.order.orderNo}</p>
          <p>{this.props.order.currency.pay}$ {this.props.order.currency.payTotal}</p>
        </Link>
      </li>
    )
  }
})

export default OrderListItem;
