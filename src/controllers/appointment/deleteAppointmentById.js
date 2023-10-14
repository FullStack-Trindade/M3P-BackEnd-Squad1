const Appointment = require("../../models/appointment");

async function deleteAppointmentById (req, res) {
    try {

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = deleteAppointmentById;