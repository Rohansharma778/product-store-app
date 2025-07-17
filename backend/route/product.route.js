import express from 'express';
import Product from '../models/product.model.js';
import mongoose from 'mongoose';
import { getAllProducts,updateProduct,AddProduct,deleteProduct } from '../controller/product.controller.js';


const router= express.Router();

router.get('/',getAllProducts)
router.put('/:id',updateProduct)
router.post('/',AddProduct)
router.delete('/:id',deleteProduct)

export default router;