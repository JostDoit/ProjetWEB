const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const StocksSchema = new Schema({
  nom: String
});

// export our module to use in server.js
module.exports = mongoose.model('Stock', StocksSchema);