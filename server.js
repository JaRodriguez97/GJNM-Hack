const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const dotenv = require("dotenv");
const app = express();
const excelRoutes = require("./src/routes/excelRoutes.js");
const apiRoute = require("./src/routes/apiRoutes.js");
const predictionRoutes = require("./src/routes/predictionRoutes.js");
dotenv.config();
const mongoose = require("./src/config/database");
const morgan = require("morgan");

app.use(morgan("dev"));

// const server = http.createServer(app);
// const io = socketIo(server);

// Configuración de sockets
// require("./src/config/socket")(io);

// Middlewares
app.use(express.json());
// app.use(require("./src/middlewares/validateRequest"));

// Rutas
app.use("/api", apiRoute);
app.use("/api/ia", predictionRoutes);
// app.use("/powerbi", require("./src/routes/powerBIRoutes"));
app.use("/api/excel", excelRoutes);

// Iniciar servidor
const port = process.env.SOCKET_PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
