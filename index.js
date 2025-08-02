const express = require("express");
const app = express();
const cors = require("cors");
//const connection = require("./db");
//const userRouter = require("./routes/user.routes");
//const productRouter = require("./routes/product.routes");
//const orderRouter = require("./routes/order.routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRouter = require("./routes/product.routes");
const userRouter = require("./routes/user.routes");
const orderRouter = require("./routes/order.routes");

dotenv.config();
app.use("/products", productRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);

mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/ecommerce")
.then(()=>{
    console.log("connected to mongodb");
    app.listen(8000,()=> console.log("Server Running on port 8000"));
})
.catch(err => console.log("DB connection error:", err));



