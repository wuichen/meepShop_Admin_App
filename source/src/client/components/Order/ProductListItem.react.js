import React from 'react';
import orderStore from '../../stores/OrderStore';
import Query from '../../utils/OrderAPI';
import Router from 'react-router';
let { Route, Redirect, RouteHandler, Link, RouteHandler} = Router;

let ProductList = React.createClass({
  getInitialState: function() {
    return {
      product: orderStore.getProductId(this.props.productId)
    };
  },
  componentDidMount () {
    orderStore.addChangeListener(this._onChange);
    Query.findProductById(this.props.productId);
	},
	componentWillUnmount () {
    orderStore.removeChangeListener(this._onChange);
	},
  render () {
    if (typeof(this.state.product) == 'undefined') {
      return (<div></div>);
    } else {
      let product = this.state.product;
      return (
        <Link to="productDetails" params={{orderId: this.props.orderId, productId: product._id}}>
          <li className="table-view-cell media">
            <img src={"http://d15rk7qij7uiby.cloudfront.net/shop/sunnytest/products/" + product._id + "/small/" + product.image} alt="" />
          </li>
        </Link>
      );
    }
  },
  _onChange () {
    this.setState({
      product: orderStore.getProductId(this.props.productId)
    });
  }
})

export default ProductList;
