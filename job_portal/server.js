//const express = require('express');
//type es module
//import packegs
import express from 'express'
import 'express-async-errors'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
//file import
import connection from './config/db.js'
//route import
import testroutes from './routes/testRoutes.js'
import authRoutes from './routes/authRoutes.js'
import errorMiddelware from './middelwares/errorMiddelwares.js'
import userRoutes from './routes/userRoutes.js'

//config
dotenv.config()

//dbconnection
connection();

//rest object
const app = express();

//midelwares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api/v1/test',testroutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/user",userRoutes);

//validation middelware
app.use(errorMiddelware)

//port

const port= process.env.port || 8080 

app.listen(port,()=>{
    console.log(`Application is in ${process.env.DEV_MODE} Mode on port no ${port}`.bgGreen.black );
});