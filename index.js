require('dotenv').config()
const express = require('express')
const cors = require('cors');

const connection = require('./src/database/index');

const appointmentRoutes = require('./src/routes/appointment')

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'] 
  }));

app.use(appointmentRoutes);

app.listen(process.env.SERVER_PORT, () => console.log(`Aplicação está online na porta ${PORT}`));

connection.authenticate();
connection.sync({ alter: true });