import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';


// app config
const app = express();
const port =4000;

// middleware
app.use(express.json());
app.use(cors());

//DB CONNECTION 
connectDB();

//api endpoints
app.use("/api/food", foodRouter);



app.get('/', (req,res)=>{
    res.send("API Working")

})
 app.listen(port, () => {
console.log(`Server started on http://localhost:${port}`);
 })
 //mongodb+srv://praveen-FooDel:<db_password>@cluster0.zdv6svd.mongodb.net/?
