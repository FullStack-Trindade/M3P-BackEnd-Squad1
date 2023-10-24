const dayjs = require("dayjs");

const Appointment = require("../../models/appointment");

async function updateAppointment (req, res) {
    try {
        const appointment = await Appointment.findByPk(req.params.id);

        if (!appointment) {
            res.status(400).json({ message: 'Consulta não encontrada' });
        }

        const { 
            appointment_reason,
            appointment_date,
            appointment_hour,
            problem_description,
            medication_prescribed,
            dosage_precautions,
            status
        } = req.body;

        appointment.appointment_reason = appointment_reason || appointment.appointment_reason;
        appointment.appointment_date = appointment_date || appointment.appointment_date;
        appointment.appointment_hour = appointment_hour || appointment.appointment_hour;
        appointment.problem_description = problem_description || appointment.problem_description;
        appointment.medication_prescribed = medication_prescribed || appointment.medication_prescribed;
        appointment.dosage_precautions = dosage_precautions || appointment.dosage_precautions; 
        appointment.status = status || appointment.status;
        appointment.updated_at = dayjs().subtract(3,'hour');

        await appointment.save();
        return res.status(200).json(appointment);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = updateAppointment;