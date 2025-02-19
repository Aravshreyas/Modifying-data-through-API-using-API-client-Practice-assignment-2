const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./database');
const menuRoutes = require('./routes/menuRoutes');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('static'));

app.use("/menu", menuRoutes);
connectDB();

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});