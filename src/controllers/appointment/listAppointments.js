const Appointment = require('../../models/appointment');

async function listAppointments (req, res) {
    try {
        const filter = req.query;

        if (filter.id) {
            if (filter.id <= 0) {
                return res.status(400).json({ message: 'O ID do paciente deve ser um número positivo' });
            }

            const appointments = await Appointment.findAll(
                { where: { id_patient: filter.id } }
                );

            if (appointments.length === 0) {
                return res.status(400).json({ message: 'Paciente não possui consultas cadastradas' });
            }

            return res.status(200).json(appointments);
        }
        
        const appointments = await Appointment.findAll();
        return res.status(200).json(appointments);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = listAppointments;