import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://praveen-FooDel:9391206849@cluster0.zdv6svd.mongodb.net/FooDel').then(() => console.log("DB CONECTED"));
}
