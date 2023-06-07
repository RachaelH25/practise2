"use strict";

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("App listening on PORT " + PORT));
