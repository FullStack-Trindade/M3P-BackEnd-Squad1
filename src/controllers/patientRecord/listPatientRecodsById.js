const Patient = require('../../models/patient');
const { Op } = require('sequelize');

async function listPatientRecordsById (request, response) {

    

    try {
        const {id, name} = request.query

        const findId = await Patient.findOne({
            include: {
                all: true,
                where: {
                    id: id
                }
            }
        })

        const findName = await Patient.findOne({
            include: {
                all: true,
                where: {
                    name: {
                      [Op.iLike]: `%${name}%`,  
                    },
                  },
            }
        })
        if(findId?.name !== findName?.name){
            return response.status(400).json({ message: 'Id do Paciente e Nome não conferem.' })
        }
        

        if (!findId && !findName) {
            return response.status(400).json({ message: 'Paciente não encontrado' })
        }


        return response.status(200).json(findId || findName);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = listPatientRecordsById;