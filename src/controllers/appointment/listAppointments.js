const Appointment = require('../../models/appointment');

async function listAppointments (req, res) {
    try {
        const appointments = await Appointment.findAll();
        return res.status(200).json(appointments);  

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = listAppointments;