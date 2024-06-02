import User from "../models/user.model.js";
import AppError from "../utils/error.utlis.js";


const addPlan=async(req,res,next)=>{
 try{
    const {id}=req.params
    const {money,status}=req.body

    const user = await User.findById(id)

    if(!user){
        return next(new AppError("User not Found",400))
    }

    if(!money || !status){
        return next(new AppError("All field are Required",400))
    }

    const addPlan={
        money,
        status
    }
    if(!addPlan){
        return next(new AppError("addPlan not created,please try again",400))
    }

    user.planSetup.push(addPlan)

    await user.save()

    res.status(200).json({
        success:true,
        message:"Plan Setup sucessfully",
        data:user
    })

 }catch(error){
    return next(new AppError(error.message,500))
 }
}

export {
    addPlan
}