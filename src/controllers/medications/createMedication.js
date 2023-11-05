const Patient = require('../../models/patient');
const User = require('../../models/user');
const Medication = require('../../models/medication');

async function createMedication (req, res) {
    try {
        const patient = await Patient.findByPk(req.body.id_patient);
        const nurse = await User.findByPk(req.body.id_nurse);

        if (!patient) {
            return res.status(400).json({ message: 'Paciente não consta nos registros' });
        }

        if (!nurse || nurse.id_type !== 2) {
            return res.status(400).json({ message: 'Enfermeiro não consta nos registros' });
        }

        const dataMedication = {
            id_patient: patient.id,
            id_nurse: nurse.id,
            nameMedication: req.body.nameMedication,
            dateMedication: req.body.dateMedication,
            hourMedication: req.body.hourMedication,
            typeMedication: req.body.typeMedication,
            amountMedication: req.body.amountMedication,
            unitMedication: req.body.unitMedication,
            observationMedication: req.body.observationMedication,
            status: req.body.status,
        };

        const newMedication = await Medication.create(dataMedication);
        return res.status(201).json(newMedication);
    
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = createMedication;