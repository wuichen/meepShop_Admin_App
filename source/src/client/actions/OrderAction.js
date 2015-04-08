import AppDispatcher from '../dispatcher/AppDispatcher';
import OrderConstants from '../constants/OrderConstants';

let OrderAction = {
  receiveOrders: (data) => {
    AppDispatcher.dispatch({
      actionType: OrderConstants.ORDERS_RECEIVEORDERS,
      data: data
    });
  },
	searchOrders: (searchKey) => {
    AppDispatcher.dispatch({
			actionType: OrderConstants.ORDERS_SEARCHORDERS,
      data: searchKey
		});
	},
  receiveProduct: (data) => {
    AppDispatcher.dispatch({
      actionType: OrderConstants.ORDERS_RECEIVEPRODUCTS,
      data: data
    });
  }
};

export default OrderAction;
