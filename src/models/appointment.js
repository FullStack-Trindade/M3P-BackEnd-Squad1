const connection = require('./../database/index');

const Appointment = connection.define('appointment', {});

module.exports = Appointment;