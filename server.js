const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const index = require("./routes/index");

app.use("/", index);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Started in ${PORT}`);
});
