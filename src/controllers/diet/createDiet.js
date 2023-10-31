const Patient = require('../../models/patient');
const User = require('../../models/user');
const Diet = require('../../models/diet');

async function createDiet (req, res) {
    try {
        const patient = await Patient.findByPk(req.body.id_patient);
        const doctor = await User.findByPk(req.body.id_doctor);

        const diet = {
            id_patient: patient.id,
            id_doctor: doctor.id,
            diet_name: req.body.diet_name,
            diet_date: req.body.diet_date,
            diet_hour: req.body.diet_hour,
            diet_type: req.body.diet_type,
            diet_description: req.body.diet_description,
            status: req.body.status
        };

        const newDiet = await Diet.create(diet);
        return res.status(201).json(newDiet);
    
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = createDiet;