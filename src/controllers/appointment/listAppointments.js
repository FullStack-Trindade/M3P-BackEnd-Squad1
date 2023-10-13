const Appointment = require('../../models/appointment');

async function listAppointments (req, res) {
    try {
        // const filter = req.query;

        // if (filter.id) {
        //     if (typeof Number(filter.id) !== 'number') {
        //         return res.status(400).json({ message: 'O ID do paciente deve ser um número' })
        //     }

        //     #TODO: verificar se a requisição funciona com id_paciente
        //     const appointments = await Appointment.findAll(
        //         { where: { id_paciente: filter.id } }
        //     );

        //     return res.status(200).json(appointments);
        // } else {
            const appointments = await Appointment.findAll();
            return res.status(200).json(appointments);
        // }  

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = listAppointments;