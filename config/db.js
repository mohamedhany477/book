const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI).then((conn) => {
  console.log(`Database Connected: ${conn.connection.host}`);
});

module.exports = mongoose;
