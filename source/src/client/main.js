import 'normalize.css';
import './css/styles.css';
import './css/ratchet/css/ratchet.css';
import React from 'react';
import HomePage from './components/Home/HomePage.react';
import OrderPage from './components/Order/OrderPage.react';
import OrderDetailsPage from './components/Order/OrderDetailsPage.react';
import ProductDetailsPage from './components/Order/ProductDetailsPage.react';
import MessagePage from './components/Message/MessagePage.react';
import NewsPage from './components/News/NewsPage.react';
import MorePage from './components/More/MorePage.react';
import Footer from './components/Footer.react';
import Query from './utils/OrderAPI';
import Router from 'react-router';
let { Route, DefaultRoute, RouteHandler} = Router;

Query.getAllOrders();

// let MainView = React.createClass({
//   render () {
//     return (
//       <div>
//         <HomePage />
//         <RouteHandler />
//         <Footer />
//       </div>
//     );
//   }
// })

let routes = (
  <Route name="main" path="/" handler={RouteHandler}>
    <Route name="orders" path="/orders" handler={OrderPage} />
    <Route name="orderDetails" path="/order/:orderId" handler={OrderDetailsPage} />
    <Route name="productDetails" path="/order/:orderId/product/:productId" handler={ProductDetailsPage} />
    <Route name="message" path="/message" handler={MessagePage} />
    <Route name="news" path="/news" handler={NewsPage} />
    <Route name="more" path="/more" handler={MorePage} />
    <DefaultRoute handler={HomePage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.querySelector('#react'));
});
