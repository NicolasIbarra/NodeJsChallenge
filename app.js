//The variables in .env can be read with this line
require("dotenv").config();

const cors = require("cors");
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const openApiConfiguration = require("./docs/swagger");

const { ConnectDB } = require("./config/mysql");

const BASE_URI = process.env.BASE_URI;
const PORT = process.env.PORT;
const APP = express();

//Enable CORS
APP.use(cors());

//Let the app work with JSON format
APP.use(express.json());

//Set Swagger route and options
APP.use(
  "/documentation",
  swaggerUI.serve,
  swaggerUI.setup(openApiConfiguration)
);

//Set Api routes
APP.use("/api", require("./routes"));

APP.listen(PORT, () => {
  console.log(
    "Tu app está escuchando " + BASE_URI + ":" + PORT + "/documentation/"
  );
});

//Connect to DB
ConnectDB();

module.exports = APP;
