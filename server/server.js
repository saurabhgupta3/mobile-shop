import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Mobile from "./model/mobile.js";
import cors from "cors";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN
}));

//create mobile
app.post("/mobiles", async (req, res) => {
    try {
        const {title, description, price, colour} = req.body;
        const mobile = await Mobile.create({
            title,
            description,
            price,
            colour
        });
        res.status(201).json(mobile);
    } catch(err) {
        res.status(500).json({
            message: `error in creating mobile ${err}`
        });
    }
});

//read mobile
app.get("/mobiles", async (req, res) => {
    try {
        const mobiles = await Mobile.find();
        res.status(200).json(mobiles);
    } catch(err) {
        res.status(500).json({
            message: `error in reading all mobiles data. ${err}`
        });
    }
});

//update mobile
app.patch("/mobiles/:id", async (req, res) => {
    try {
        // const mobile = await Mobile.findById(ireq.params.id);
        // if(!mobile) {
        //     res.status(404).json({
        //         message: "mobile not found",
        //     });
        // }
        // if(req.body.title !== undefined) {
        //     mobile.title = req.body.title;
        // }
        // if(req.body.title !== undefined) {
        //     mobile.title = req.body.title;
        // }
        // if(req.body.title !== undefined) {
        //     mobile.title = req.body.title;
        // }
        // if(req.body.title !== undefined) {
        //     mobile.title = req.body.title;
        // }
        // await material.save();
        const mobile = await Mobile.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if(!mobile) {
            res.status(404).json({
                message: "resource not found",
            });
        }
        res.status(200).json(mobile);
    } catch(err) {
        res.status(500).json({
            message: `error in updating the mobile with id : ${req.params.id}. ${err}`,
        });
    }
});

//delete request
app.delete("/mobiles/:id", async (req, res) => {
    try {
        const mobile = await Mobile.findByIdAndDelete(req.params.id);
        if(!mobile) {
            res.status(404).json({
                message: "mobile not found with this id",
            });
        };
        res.status(200).json(mobile);
    } catch(err) {
        res.status(500).json({
            message: `error in deleting the mobile, ${err}`
        });
    }
});
app.listen(process.env.PORT, () => {
    console.log(`server is listening on PORT ${process.env.PORT}`);
});