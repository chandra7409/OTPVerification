const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./config/db.config");
const serverConfig = require("./config/server.config");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', require("./routes/auth.route"));
app.use('/', require("./routes/userTask.route"));

/**
 * Setup the mongodb connection and create on ADMIN user
 */
mongoose.set('strictQuery', false);
mongoose.connect(dbConfig.DB_URL, async() => {
    console.log("MongoDB connected");

})

/**
 * Start the express server
 */
app.listen(serverConfig.PORT, () => {
    console.log("Application has started on the port ", serverConfig.PORT);
})