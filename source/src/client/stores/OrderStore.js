import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher'
import OrderConstants from '../constants/OrderConstants';

const CHANGE_EVENT = "change";
let orders = [];
let products = {};

function _searchOrders(data) {
  console.log('searchKey: ' + data);
}

function _loadOrders(data) {
  orders = data;
}

function _loadProducts(data) {
  let product = data[0];
  let key = product._id;
  products[key] = product;
  console.log(products);
}

class OrderStore extends EventEmitter {
    getAllOrders() {
      return orders;
    }

    getOrderById(id) {
      let ret;
      orders.forEach(function (order) {
        if (order._id === id) {
          ret = order;
        }
      });
      return ret;
    }

    getProductId(id) {
      return products[id];
    }

    clearProduct() {
      // delete products;
    }

  	emitChange(){
  		this.emit(CHANGE_EVENT);
  	}

  	addChangeListener(callback){
  		this.on(CHANGE_EVENT, callback);
  	}

  	removeChangeListener(callback){
  		this.removeListener(CHANGE_EVENT, callback);
  	}
}

let orderStore = new OrderStore();

AppDispatcher.register((action) => {
	switch(action.actionType){
		case OrderConstants.ORDERS_RECEIVEORDERS:
      _loadOrders(action.data)
      orderStore.emitChange();
			break;
    case OrderConstants.ORDERS_SEARCHORDERS:
      _searchOrders(action.data);
      orderStore.emitChange();
      break;
    case OrderConstants.ORDERS_RECEIVEPRODUCTS:
      _loadProducts(action.data);
      orderStore.emitChange();
      break;
		default:
	}
});

export default orderStore;
