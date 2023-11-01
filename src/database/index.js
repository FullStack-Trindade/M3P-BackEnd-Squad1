const Sequelize = require('sequelize')

require('pg').types.setTypeParser(1114, function(stringValue) {
    return new Date(Date.parse(stringValue + '+0000'));
})

const connection = new Sequelize({
    dialect: process.env.DIALECT_DATABASE,
    host: process.env.HOST_DATABASE,
    username: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    port: process.env.PORT_DATABASE,
    database: process.env.NAME_DATABASE,
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true
    },    
    timezone: '-03:00'
})

module.exports = connection