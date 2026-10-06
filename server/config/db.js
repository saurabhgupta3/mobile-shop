import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb is connected");
    } catch(err) {
        console.log("mongodb connection error", err);
    }
}
export default connectDB;