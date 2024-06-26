import express from 'express'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'
import morgan from 'morgan'
// import userRoutes from './route/user.routes.js'
// import errorMiddleware from './middlewares/error.middleware.js'
// import courseRouter from './route/course.routes.js'
import cors from 'cors'
import userRoute from './route/user.route.js'
// import payementRoutes from './route/payment.routes.js'
// import demoRoute from './route/demo.routes.js'
// import stats from './route/Stats.routes.js'


config()


const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use(cors({
   origin:[process.env.FRONTEND_URL],
   credentials:true
}))

app.use(morgan('dev'))
app.use("/api/v1/user",userRoute)
// app.use('/api/v1/user',userRoutes)
// app.use('/api/v1/courses',courseRouter)
// app.use('/api/v1/payements',payementRoutes)
// app.use('/api/v1/demo/video',demoRoute)

// app.use('/api/v1/admin/stats',stats)



// app.use(errorMiddleware)
app.use('/',(req,res)=>{
   res.status(200).json({
      message:"ka ho bab",
      "data":"don"
   })
})



app.all('*',(req,res)=>{
    res.status(404).send('OOPS!! 404 NOT FOUND')
})

// app.all('*',(req,res)=>{
//    res.status(404).send('OPPS! 404 NOT FOUND')
// }) 

// 3 moduele


export default app