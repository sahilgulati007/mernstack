import express from "express"
import ApiCtrl from "./api.controller.js"

const router = express.Router()
router.route("/").get((req,res)=> res.send("hello world"))
router.route("/getdata").get(ApiCtrl.apigetData)
router.route("/adddata").post(ApiCtrl.apiPostInsertData)
router.route("/deletedata").delete(ApiCtrl.deleteData)

export default router