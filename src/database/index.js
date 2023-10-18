const Sequelize = require('sequelize')

const connection = new Sequelize({
    dialect: process.env.DIALECT_DATABASE,
    host: process.env.HOST_DATABASE,
    username: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    port: process.env.DB_PORT,
    database: process.env.NAME_DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
})

module.exports = connection