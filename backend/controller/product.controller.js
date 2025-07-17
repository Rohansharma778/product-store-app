import Product from "../models/product.model.js"
import mongoose from 'mongoose';


export const getAllProducts = async(req,res)=>{
    
    try {
        const products=await Product.find({});
        res.status(200).json({success:true,data:products})
    } catch (error) {
        console.log("error in fetching products:",error.message)
    res.status(500).json({success:false,message:"Server error"})
    }
}

export const updateProduct = async(req,res)=>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({succes:false,message:"invalid product id"})
    }

    const product=req.body;
    try {
        const updatedproduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true , data:updatedproduct})
    } catch (error) {
        console.log("error in updating",error)
        res.status(500).json({success:false,message:"unable to update"})
    }
}

export const AddProduct = async(req,res)=>{
console.log("Received body:", req.body);
 const product =req.body; //user will send this data

if(!product.name || !product.price || !product.image){
    return res.status(400).json({success:false,message:'please provide all fields'});
}

const newProduct = new Product(product);

try {
    await newProduct.save()
    res.status(201).json({success:true,data:newProduct})
} catch (error) {
    console.error("Error in creating product:",error.message);
    res.status(500).json({success:false,message:"server error"})
}
}

export const deleteProduct =async(req,res)=>{
    const {id} = req.params;

     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({succes:false,message:"invalid product id"})
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"product deleted"});
    } catch (error) {
        console.log("error in deleting the products:",error.message)
        res.status(500).json({success:false,message:"server error"})
    }
}