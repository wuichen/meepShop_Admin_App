import 'normalize.css';
import './css/styles.css';
import './css/ratchet/css/ratchet.css';
import React from 'react';
import HomePage from './components/HomePage.react';
import OrderPage from './components/OrderPage.react';
import OrderDetailsPage from './components/OrderDetailsPage.react';
import ProductDetailsPage from './components/ProductDetailsPage.react';
import Footer from './components/Footer.react';
import Query from './utils/OrderAPI';
import Router from 'react-router';
let { Route, Redirect, RouteHandler, Link, RouteHandler} = Router;

Query.getAllOrders();

let MainView = React.createClass({
  render () {
    return (
      <div>
        <HomePage />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
})

let routes = (
  <Route name="main" path="/" handler={MainView}>
    <Route name="orders" path="/orders" handler={OrderPage} />
    <Route name="orderDetails" path="/order/:orderId" handler={OrderDetailsPage} />
    <Route name="productDetails" path="/order/:orderId/product/:productId" handler={ProductDetailsPage} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.querySelector('#react'));
});
