const yup = require('yup')

const validation = yup.object().shape({

    name: yup
    .string("O name deve ser uma string")
    .required("Nome é obrigatório.")
    .min(8,"O name deve conter ao menos 8 caracateres")
    .max(64,"O name deve conter no máximo 64 caracateres"),

    gender: yup
    .string("Genero deve ser uma string")
    .required("Genero é obrigatório"),
    

    email: yup
    .string("Email deve ser uma string")
    .email("Você deve inserir um email válido")
    .required("Email é obrigatório"), 

    phone: yup
    .string("Telefone deve ser uma string")
    .matches(/^\(\d{2}\)\s9\s\d{4}-\d{4}$/, "Formato de telefone inválido")
    .required("Telefone é obrigatório"),

    password: yup
    .string("Senha deve ser uma string.")
    .min(6,"O password deve ter no mínimo 6 caracteres.")
    .required("password é obrigatório."),

    idType: yup
    .number()
    .integer("Campo Tipo deve ser um integer")
    .required("Campo Tipo é obrigatório")
    .min(0, 'Campo tipo deve conter numero de 0 a 3, sendo 0 = Administrador, 1 = Médico, 2 = Enfermeiro(a) e 3 = Paciente')
    .max(3, 'Campo tipo deve conter numero de 0 a 3, sendo 0 = Administrador, 1 = Médico, 2 = Enfermeiro(a) e 3 = Paciente'),

})


const validatePutUser = (request, response, next) =>{
    try {
        validation.validateSync(request.body)
        next()
    } catch (error) {
        //pega o erro de validação e retorna em json "mensagem: error.message" onde 'error' é do try e 'message' do YUP
        response.status(400).json({
            mensagem: error.message
        })
    }
    
}

module.exports = validatePutUser