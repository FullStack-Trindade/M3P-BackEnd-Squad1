const Patient = require('../../models/patient');

async function listPatientRecords (req, res) {
    try {
        const patients = await Patient.findAll({ include: { all: true } });

        const filteredPatients = [];
        patients.forEach(patient => {
            if (patient.appointments.length > 0
                // || patient.exams.length > 0
                ) {
                filteredPatients.push(patient);
            }
        })

        return res.status(200).json(filteredPatients);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = listPatientRecords;