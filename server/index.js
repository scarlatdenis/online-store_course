require("dotenv").config();
const sequelize = require("./db");
const express = require("express");
const models = require("./models/models");
const cors = require("cors"); // for req res from browser
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json()); //express is for our app can be parse json format
app.use("/api", router);

// need to be last. Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT} `)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
