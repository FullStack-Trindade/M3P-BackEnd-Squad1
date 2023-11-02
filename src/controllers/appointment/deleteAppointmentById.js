const Appointment = require("../../models/appointment");

async function deleteAppointmentById (req, res) {
    try {
        const id = req.params.id;
        
        if (id <= 0) {
            return res.status(400).json({ message: 'Identificador deve ser um número positivo' });
        }

        const appointment = await Appointment.findByPk(id);

        if (!appointment) {
            return res.status(400).json({ message: 'Consulta não encontrada' });
        }

        await appointment.destroy();
        return res.status(202).json();

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = deleteAppointmentById;