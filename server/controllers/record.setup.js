import User from "../models/user.model.js";
import AppError from "../utils/error.utlis.js";

const addRecord=async(req,res,next)=>{
try{

    const {id}=req.params
    const {amount,purpose}=req.body

    const user=await User.findById(id)

    if(!user){
        return next(new AppError("User not found",400))
    }

    if(!amount || !purpose){
        return next(new AppError("All fields are Required",400))
    }

    const addRecord={
        amount,
        purpose
    }

    if(!addRecord){
        return next(new AppError("Add record not added",400))
    }

    user.record.push(addRecord)

    await user.save()

    res.status(200).json({
        success:true,
        message:"Record added Succesfully",
        data:user
    })

}catch(error){
    return next(new AppError(error.message,500))
}
}


export {
    addRecord
}