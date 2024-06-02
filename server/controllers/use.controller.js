import User from "../models/user.model.js";
import AppError from "../utils/error.utlis.js";

const addUser=async(req,res,next)=>{
    try{
        const {name,email,phoneNumber,planSetup,record}=req.body
        const user=await User.create({
            name,
            email,
            phoneNumber,
        })

        if(!user){
            return next(new AppError("User not found",400))
        }

        await user.save()


        res.status(200).json({
            success:true,
            message:"Hyy this is ayush",
            data:user
        })

    }catch(error){
        return next(new AppError(error.message,500))
    }
}

export {
    addUser
}