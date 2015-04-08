import React from 'react';
import OrderAction from '../actions/OrderAction';

let SearchBar = React.createClass({
  searchHandler: function () {
    let searchKey = this.refs.searchKey.getDOMNode().value
    OrderAction.searchOrders(searchKey);
  },
  render () {
    return (
      <div className="bar bar-standard bar-header-secondary">
        <input type="search" ref="searchKey" onChange={this.searchHandler} />
      </div>
    );
  }
});

export default SearchBar;
