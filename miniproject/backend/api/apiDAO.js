import { response } from "express"

let client

export default class ApiDAO{
    static async injectDB(conn){
        client= conn.db(process.env.RESTAPI_NS).collection("tesing")
    }
    static async apiGetData(){
        let resultdata
        try {
            resultdata = await client.find()
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { dataList: []}
        }
        try {
            const dataList = await resultdata.toArray()
           
      
            return { dataList }
          } catch (e) {
            console.error(
              `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { restaurantsList: [], totalNumRestaurants: 0 }
          }
    }
    static async addData(newdata){
        let response
        try{
            response = await client.insertOne(newdata)
            return response
        }catch(e){
            console.log(e)
        }
    }
    static async deletedata(query){
        try{
            let response = await client.deleteOne(query)
            return response
        }catch(e){
            console.log(e)
        }
    }
}
