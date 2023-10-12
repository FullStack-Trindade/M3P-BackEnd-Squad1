require('dotenv').config()
const express = require('express')
const connection = require('./src/database')

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'] 
  }));
app.listen(3000)

connection.authenticate();
connection.sync({ alter: true });

// teste criação da branch develop e 1st commit