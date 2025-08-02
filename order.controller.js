const Order = require("../models/order.model");
const Product = require("../models/product.model")

exports.placeOrder = async (req, res) =>{
    try{
        const {userId, products} = req.body;

        let totalAmount = 0;
        for(let item of products){
          let product = await Product.findById(item.productId);
          if(!product) throw new Error("invalid product id");
          totalAmount+=product.price*itemm.quantity;
        }
        const order = await Order.create({userId, products, totalAmount})
        res.status(201).json(product);
    } catch (err){
        res.status(400).json({error:err.message});
    }
};

exports.getAllOrders = async (req, res) =>{
    try{
        const orders = await Order.find()
        .populate("userId")
        .populate("products.productId");
        res.json(orders);
    } catch (err){
        res.status(500).json({error:err.message});
    }
};

exports.deleteOrder = async (req, res) =>{
    try{
         await Order.findByIdAndDelete(req.params.id);
         res.json({message: "Order Deleted"});
    } catch (err){
        res.status(400).json({error:err.message});
    }
};