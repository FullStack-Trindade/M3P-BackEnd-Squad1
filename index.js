require('dotenv').config()
const express = require('express')
const connection = require('./src/database')

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'] // Adicione o cabeçalho 'Content-Type' aqui
  }));
app.listen(3000)

connection.authenticate();
connection.sync({ alter: true });

app.get('/api/usuario', (res, req)=>{
    
})