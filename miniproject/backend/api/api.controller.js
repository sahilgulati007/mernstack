import ApiDOA from "./apiDAO.js" 
export default class miniproj{
    static async apigetData(req,res){
        const data = await ApiDOA.apiGetData()
        res.json(data)
    }
    static async apiPostInsertData(req,res){
        try{
            console.log(req.body.rollno)
            const srno = req.body.rollno
            const snm = req.body.sname
            const sc = req.body.sclass
            const sadd = req.body.saddress

            const newdata= {
                name: snm,
                rollno: srno,
                sclass: sc,
                address: sadd
            }
            console.log(newdata)
            const result = await ApiDOA.addData(newdata)
            res.json(result)

        }catch(e){
            console.log(e)
        }
    }
    static async deleteData(req, res){
        try{
            const srno = req.body.rollno
            const snm = req.body.sname
            const sc = req.body.sclass
            const sadd = req.body.saddress

            var q={
                rollno: srno
            }
            const result = await ApiDOA.deletedata(q)
            res.json(result)
        }catch(e){
            res.json(e)
        }
    }
}