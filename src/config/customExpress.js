const express = require('express');
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const consign = require('consign');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 

consign({cwd: 'src'}).then('./controllers').into(app)

module.exports = app;