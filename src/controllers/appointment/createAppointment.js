const User = require('../../models/user');
const Appointment = require('../../models/appointment');

async function createAppointment (req, res) {
    try {
        const patient = await User.findByPk(req.body.id_patient);
        const doctor = await User.findByPk(req.body.id_doctor);

        if (!patient || patient.id_type !== 3) {
            return res.status(404).json({ message: 'Paciente não consta nos registros' });
        }

        if (!doctor || doctor.id_type !== 1) {
            return res.status(404).json({ message: 'Médico não consta nos registros' });
        }

        const appointment = {
            id_patient: patient.id,
            id_doctor: doctor.id,
            appointment_reason: req.body.appointment_reason,
            appointment_date: req.body.appointment_date,
            appointment_hour: req.body.appointment_hour,
            problem_description: req.body.problem_description,
            medication_prescribed: req.body.medication_prescribed,
            dosage_precautions: req.body.dosage_precautions,
            status: req.body.status
        };

        const newAppointment = await Appointment.create(appointment);
        return res.status(201).json(newAppointment);
    
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = createAppointment;