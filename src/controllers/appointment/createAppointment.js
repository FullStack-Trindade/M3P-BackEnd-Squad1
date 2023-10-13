// const Patient = require('../../models/patient');
// const Doctor = require('../../models/doctor');
const Appointment = require('../../models/appointment');

async function createAppointment (req, res) {
    try {
        // const patient = await Patient.findByPk(req.body.id_paciente);
        // const doctor = await Doctor.findByPk(req.body.id_medico);

        // if (!patient) {
        //     return res.status(404).json({ message: 'Patient not registered' });
        // }

        // if (!doctor) {
        //     return res.status(404).json({ message: 'Doctor not registered' });
        // }

        const appointment = {
            // id_paciente: patient.id,
            // id_medico: doctor.id,
            motivo_consulta: req.body.motivo_consulta,
            data_consulta: req.body.data_consulta,
            hora_consulta: req.body.hora_consulta,
            descricao_problema: req.body.descricao_problema,
            medicacao_receitada: req.body.medicacao_receitada,
            dosagem_precaucoes: req.body.dosagem_precaucoes,
            status: req.body.status
        };

        const newAppointment = await Appointment.create(appointment);
        return res.status(201).json({
            id: newAppointment.id,
            appointment
        });
    
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = createAppointment;