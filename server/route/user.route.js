import { Router } from "express";
import { addUser } from "../controllers/use.controller.js";
import { addPlan } from "../controllers/planSetup.js";



const userRoute=Router()



userRoute.post("/",addUser)

userRoute.post("/addPlan/:id",addPlan)

export default userRoute