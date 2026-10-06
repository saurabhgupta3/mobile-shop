import mongoose from "mongoose";

const mobileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    colour: {
        type: String,
        required: true
    }
});

const Mobile = mongoose.model("Mobile", mobileSchema);
export default Mobile;