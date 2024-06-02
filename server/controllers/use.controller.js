import User from "../models/user.model.js";
import AppError from "../utils/error.utlis.js";

const addUser=async(req,res,next)=>{
    try{
        const {name}=req.body
        res.status(200).json({
            success:true,
            message:"Hyy this is ayush",
            data:name
        })

    }catch(error){
        return next(new AppError(error.message,500))
    }
}

export {
    addUser
}