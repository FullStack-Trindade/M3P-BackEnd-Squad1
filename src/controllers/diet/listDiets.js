const Diet = require('../../models/diet');
const Patient = require('../../models/patient');
const User = require('../../models/user');

async function listDiets (req, res) {
    try {

        const patientName = req.query.name
            ? req.query.name.replace(/_/g, " ")
            : null;

        if (patientName) {
            const userRequest = await User.findOne({
                where: { name: patientName }
            })
    
            if (!userRequest) {
                return res.status(400).json({ message: 'O nome do usuário não consta no cadastro' });
            }
    
            const patients = await Patient.findOne({
                where: { id_user: userRequest.id }
            })
    
            if (!patients) {
                return res.status(400).json({ message: 'Não há pacientes com este nome no cadastro' });
            }
    
            const diet = await Diet.findAll({
                where: { id_patient: patients.id }
            })
    
            return res.status(200).json(diet);
        }
        
        const diets = await Diet.findAll();
        return res.status(200).json(diets);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = listDiets;