const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", true);
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log("MongoDB Atlas is connected💚");
        });
    } catch (error) {
        console.log("Error❤", error);
    }
};
module.exports = connectDatabase;
