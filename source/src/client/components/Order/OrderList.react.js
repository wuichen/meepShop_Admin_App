import React from 'react';
import OrderListItem from './OrderListItem.react';
import SearchModeStore from '../../stores/SearchModeStore';
import SearchModeAction from '../../actions/SearchModeAction';

var styles = {
  listSearchModeOn: {
    marginTop: '40px'
  },
  listSearchModeOff: {
    marginTop: '15px'
  }
}


let Orderlist = React.createClass({
  getInitialState () {
    return({
      searchMode : SearchModeStore.getsearchMode()
    });
  },

  componentDidMount() {
    SearchModeStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    SearchModeStore.removeChangeListener(this._onChange);
  },
  _onChange() {
    this.setState({
      searchMode: SearchModeStore.getsearchMode()
    })
        console.log(this.state.searchMode);

  },
  render () {
    let items = this.props.orders.map(function (order) {
      return (
        <OrderListItem order={order} orderId={order._id} key={order._id} />
      )
    })
    return (
      <ul style={this.state.searchMode ? styles.listSearchModeOn : styles.listSearchModeOff} className="table-view">
        {items}
      </ul>
    );
  }
});

export default Orderlist;
