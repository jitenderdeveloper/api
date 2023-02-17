const jwt = require('jsonwebtoken')

module.exports= (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const verify = jwt.verify(token,'MY_SECRET_KEY');
        console.log(verify);
        next();
    }
    catch(error){
        console.log(error);
        return(
            res.status(401).json({
                message: 'invalid token'
            })
        )
    }
}