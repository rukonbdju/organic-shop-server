const express = require('express')
const dotenv=require('dotenv')
dotenv.config()
const cors = require('cors');
const app = express()
const userRouter = require('./app/routes/v1/user.router');
const productRouter = require('./app/routes/v1/product.router');
const orderRouter = require('./app/routes/v1/order.router');

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())


app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/orders", orderRouter)

app.get("/", (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log("server is running on port", port)
})