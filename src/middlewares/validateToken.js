const jwt = require('jsonwebtoken')

const validateToken = (request, response, next)=>{

    const token = request.headers.authorization
    
    if (!token || token === 'Bearer') {
        return response.status(403).json({
            msg: "Token vazio ou nulo."
        })
    }


    const newToken = token.slice(7)
    newToken = newToken.substring(0, newToken.length - 1)


    jwt.verify(newToken,'secret_key', (error, conteudoDoToken)=>{
        
        if(error){
            
            if (error.name ==='TokenExpiredError') {
                
                return response.status(403).json({
                    msg: "Token expirado." 
                })
            }else if(error.name === "JsonWebTokenError"){
                return response.status(403).json({

                    msg: "Token inválido."
                })
            }
        }else{
            request.body.user_id = conteudoDoToken.id            
            next()
        }
    })
}

module.exports = validateToken