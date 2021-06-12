const dbConfig = require("mongodb.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.templates = require("./template.model.js")(mongoose);

module.exports = db;