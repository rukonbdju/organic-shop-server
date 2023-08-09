const { MongoClient, ServerApiVersion } = require('mongodb');

const userName =   process.env.USER_NAME
const password = process.env.PASSWORD
const uri = `mongodb+srv://${userName}:${password}@e-commerce.ftrolgz.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const db=client.db('organic-shop')
module.exports=db;