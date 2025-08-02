const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type:String, required:true},
    category:{type:String, enum:['electronic','cloths','home','sports'], required:true},
    price:{type:Number, required:true, min:1},
    inStock:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now}
});

module.exports = mongoose.model("product", productSchema);

