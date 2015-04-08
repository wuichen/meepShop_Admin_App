import React from 'react';
import ProductListItem from './ProductListItem.react';

let ProductList = React.createClass({
  render () {
    let items = this.props.products.map(function (product) {
      return (
        <ProductListItem productId={product.productId} orderId={this.props.orderId} />
      )
    }.bind(this))
    return (
      <ul className="table-view">
        {items}
      </ul>
    );
  },
})

export default ProductList;
