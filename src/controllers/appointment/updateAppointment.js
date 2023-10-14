const Appointment = require("../../models/appointment");

async function updateAppointment (req, res) {
    try {
        const appointment = await Appointment.findByPk(req.params.id);

        const { 
            motivo_consulta,
            data_consulta,
            hora_consulta,
            descricao_problema,
            medicacao_receitada,
            dosagem_precaucoes,
            status
        } = req.body;

        appointment.motivo_consulta = motivo_consulta || appointment.motivo_consulta;
        appointment.data_consulta = data_consulta || appointment.data_consulta;
        appointment.hora_consulta = hora_consulta || appointment.hora_consulta;
        appointment.descricao_problema = descricao_problema || appointment.descricao_problema;
        appointment.medicacao_receitada = medicacao_receitada || appointment.medicacao_receitada;
        appointment.dosagem_precaucoes = dosagem_precaucoes || appointment.dosagem_precaucoes; 
        appointment.status = status || appointment.status;

        await appointment.save();
        return res.status(200).json(appointment);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = updateAppointment;