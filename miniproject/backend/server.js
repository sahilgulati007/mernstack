import express from "express"
import cors from "cors"
import apiroute from "./api/api.route.js"
import bodyParser from 'body-parser'

const app=express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/miniproj",apiroute)
app.use("*", (req, res)=> res.status(404).json({error:"not found"}))

export default app