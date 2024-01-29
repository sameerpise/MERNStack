class Errorhandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
  
    }
 export const errorMidlware = (err,req,res,next)=>{
        err.message = err.message || 'internal Server Error';
        err.statuscode = err.statuscode || 500;

        return res.status(err.statuscode).json({
            success:false,
            message:err.message,
        })
 }
 export default Errorhandler;