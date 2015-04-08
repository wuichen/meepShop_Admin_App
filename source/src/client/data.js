let OrderService = (function () {

  let orders = [];

  let meepShopAPI = 'http://api.meepshop.com/orders?sort=_id,-1'
  let productAPI = 'http://api.meepshop.com/products?'

  let findByName = function (searchKey, callback) {
      superagent
        .get(meepShopAPI)
        .query({
          'limit': 20,
          'storeId': '51402c5bfc93608c75000002'
        })
        .end(function(err, res){
          let data = res.body.data
          data.map(function (order, index) {
            if (findById(order._id)) {
              orders[index] = {
                id: order._id,
                order: order
              }
            } else {
              orders.push({
                id: order._id,
                order: order
              })
            }
          })
          callback(orders)
      });
  }

  let findById = function (id) {
    for (let index = 0; index < orders.length; index++) {
      if (orders[index].id === id) {
        return orders[index].order;
      }
    }
  }

  let findProductById = function (id, callback) {
    superagent
      .get(productAPI)
      .query({
        '_id': id
      })
      .end(function(err, res){
        let data = res.body.data
        callback(data)
    });
  }

  // The public API
  return {
      findByName: findByName,
      findById: findById,
      findProductById: findProductById
  }

}());

export default OrderService;
