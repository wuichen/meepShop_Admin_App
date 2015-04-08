import OrderAction from '../actions/OrderAction';
import request from 'superagent';

let orderAPI = 'http://api.meepshop.com/orders?sort=_id,-1'
let productAPI = 'http://api.meepshop.com/products?'

let OrderService = {
  getAllOrders: () => {
    request
      .get(orderAPI)
      .query({
        'limit': 20,
        'storeId': '51402c5bfc93608c75000002'
      })
      .end(function(err, res){
        let data = res.body.data;
        OrderAction.receiveOrders(data);
      });
  },
  findProductById: (id) => {
    request
      .get(productAPI)
      .query({
        '_id': id
      })
      .end(function(err, res){
        let data = res.body.data
        OrderAction.receiveProduct(data);
      });
  }
};

export default OrderService;
