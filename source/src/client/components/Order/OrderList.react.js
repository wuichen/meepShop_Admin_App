import React from 'react';
import OrderListItem from './OrderListItem.react';

let Orderlist = React.createClass({
  render: function() {
    let items = this.props.orders.map(function (order) {
      return (
        <OrderListItem order={order} orderId={order._id} key={order._id} />
      )
    })
    return (
      <ul className="table-view">
        {items}
      </ul>
    );
  }
});

export default Orderlist;
