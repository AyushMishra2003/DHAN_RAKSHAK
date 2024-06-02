import { Router } from "express";
import { addUser } from "../controllers/use.controller.js";
import { addPlan } from "../controllers/planSetup.js";
import { addRecord } from "../controllers/record.setup.js";



const userRoute=Router()



userRoute.post("/",addUser)

userRoute.post("/addPlan/:id",addPlan)

userRoute.post("/addRecord/:id",addRecord)

export default userRoute