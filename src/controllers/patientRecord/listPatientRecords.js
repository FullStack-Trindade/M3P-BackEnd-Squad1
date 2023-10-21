const Patient = require('../../models/patient');

async function listPatientRecords (req, res) {
    try {
        const patients = await Patient.findAll({ include: { all: true } });

        if (!patients) {
            return res.status(400).json({ message: 'Pacientes não encontrados' })
        }

        const filteredPatients = [];
        patients.forEach(patient => {
            if (patient.appointments.length > 0
                // || patient.exams.length > 0
                ) {
                filteredPatients.push(patient);
            }
        })

        if (filteredPatients.length === 0) {
            return res.status(400).json({ message: 'Pacientes não encontrados' })
        }

        return res.status(200).json(filteredPatients);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = listPatientRecords;