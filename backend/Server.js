const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/TodoRouter');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const allowedOrigins = [
    'https://priyabaski5.github.io',
    'http://localhost:3000'
];

app.use(cors({
    origin: allowedOrigins
}));

mongoose
    .connect(process.env.Mongodb_URL)
    .then(()=>console.log(`Connected to mongodb...`))
    .catch((err)=>console.log(err));

app.use(routes);
app.listen(PORT,()=> console.log(`Listening to PORT: ${PORT}`));