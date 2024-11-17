const mongoose = require("mongoose");

mongoose
  .connect(process.env.uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.log("Error al conectar a MongoDB:", error));

module.exports = mongoose;
