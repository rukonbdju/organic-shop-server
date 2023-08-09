const db = require("./db.connect");

module.exports.userCollection=db.collection('users')
module.exports.productCollection=db.collection('products')
module.exports.orderCollection=db.collection('orders')