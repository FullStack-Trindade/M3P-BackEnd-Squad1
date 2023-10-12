require('dotenv').config()
const express = require('express')
const cors = require('cors');
const connection = require('./src/database')

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'] 
  }));
app.listen(process.env.SERVER_PORT, () => {
  console.log("local server online");
})

connection.authenticate();
connection.sync({ alter: true });
