import React from 'react';
import Header from '../Header.react';
import orderStore from '../../stores/OrderStore';
import Router from 'react-router';
let { Route, Redirect, RouteHandler, Link, RouteHandler} = Router;

let ProductDetailsPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    let { productId, orderId } = this.context.router.getCurrentParams();
    return {
      product: orderStore.getProductId(productId),
      orderId: orderId
    };
  },
  render () {
    let product = this.state.product;
    return (
      <div>
        <Header prepage={"#/order/" + this.state.orderId} text='ProductDetails' back="true" />
        <div className="content">
          <ul className="table-view">
            <li className="table-view-cell media">
              <img src={"http://d15rk7qij7uiby.cloudfront.net/shop/sunnytest/products/" + product._id + "/small/" + product.image} alt="" />
            </li>
            <li className="table-view-cell">
              <p>Description</p>
              <div dangerouslySetInnerHTML={{__html: product.info}} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
})

export default ProductDetailsPage;
