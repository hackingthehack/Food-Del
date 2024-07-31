import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://hello:12312312@cluster0.az2q4tc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}