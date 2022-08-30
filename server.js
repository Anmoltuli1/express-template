const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

require("dotenv").config();
require("./startup/router")(app);
require("./config/db")();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
