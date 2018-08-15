const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(), cors());

// serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// add routes
app.use(routes);

// connect to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/myDataRevampDB");

// start the API server
app.listen(PORT, function() {
    console.log("🌎  ==> API Server now listening on PORT ${PORT}!");
})