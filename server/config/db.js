import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jose08victor:b17UvuwhsQiDiPqgHQ@cluster0.syaklfy.mongodb.net/food-delivery-project').then(() => console.log("DB Connected"));
}