const Appointment = require("../../models/appointment");

async function deleteAppointmentById (req, res) {
    try {
        const appointment = await Appointment.findByPk(req.params.id);

        await appointment.destroy();
        return res.status(202).json();

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = deleteAppointmentById;