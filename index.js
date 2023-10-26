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
  //para manter a segurança não mostrar a porta e para facilitar as possíveis alterações
app.listen(process.env.SERVER_PORT, () => {console.log(`Servidor rodando na porta, ${process.env.SERVER_PORT}`);});
app.use(express.json())
connection.authenticate();
connection.sync({ alter: true });

const Login = require('./src/controllers/session/login')
const validateToken = require('./src/middlewares/validateToken')
// rota estava /api/usuario/login
// removido validatetoken, pois a roda de login é publica, este middlewares, deve estar presente em todas as outras rotas que são privadas.
app.post('/api/usuarios/login', /* validateToken, */ Login)

const postUser = require('./src/controllers/user/postUser')
const validaUsuario = require('./src/middlewares/validaUsuario')
app.post('/api/usuario', validateToken , validaUsuario, postUser);