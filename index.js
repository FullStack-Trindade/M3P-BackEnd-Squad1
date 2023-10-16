require('dotenv').config()
const express = require('express')
const connection = require('./src/database')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.listen(3000)
app.use(express.json())
connection.authenticate();
connection.sync({ alter: true });

const postUser = require('./src/controllers/user/postUser')
const validaUsuario = require('./src/middlewares/validaUsuario')
app.post('/api/usuario', validaUsuario, postUser)