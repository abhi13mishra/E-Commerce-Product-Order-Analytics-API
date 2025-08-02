const Product = require("../models/product.model");

exports.createProduct = async (req, res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err){
        res.status(400).json({error:err.message});
    }
};

exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find();
        res.json(products);
    } catch (err){
        res.status(500).json({error:err.message});
    }
};

exports.updateProduct = async (req, res) =>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.json(product);
    } catch (err){
        res.status(400).json({error:err.message});
    }
};

exports.deleteProduct = async (req, res) =>{
    try{
         await Product.findByIdAndDelete(req.params.id);
         res.json({message: "Product deleted"});
    } catch (err){
        res.status(400).json({error:err.message});
    }
};