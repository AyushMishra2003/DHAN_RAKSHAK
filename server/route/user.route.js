import { Router } from "express";
import { addUser } from "../controllers/use.controller.js";



const userRoute=Router()



userRoute.post("/",addUser)

export default userRoute