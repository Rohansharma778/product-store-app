import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import productRoutes from './route/product.route.js'
import path  from 'path'
dotenv.config()

const app = express()
const PORT=process.env.PORT||5001

const __dirname = path.resolve()
app.use(express.json()); //allows us to accept Json data in the req.body

app.use('/api/products',productRoutes)

if(process.env.NODE_ENV ==="production"){
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("/app",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
});
}
connectDB();

app.listen(PORT,()=>{
    console.log('server running on http://localhost:'+PORT )
})