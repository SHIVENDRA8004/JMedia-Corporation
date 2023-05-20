const express = require("express");
const app = express();
const connectDatabase = require("./config/configDatabase");
const dotenv = require("dotenv");

const port = process.env.PORT || 5500;
connectDatabase();

dotenv.config();
app.get("/", (req, res) => {
    res.send("Backend is Working");
});

app.listen(port, () => {
    console.log(`Backend Server Started Listening on Port ${port}`);
});
