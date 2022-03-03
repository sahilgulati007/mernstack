const { MongoClient } = require('mongodb');

async function main() {
    const uri = "";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        await listdb(client);

        await createlisting(client,{
            name: "sahi6",
            rollno: 2,
            sclass: "5e",
            address: "testing add"
        });

        await createMultiplelisting(client, [
            {
                name: "sab1",
                rollno: 3,
                sclass: "5e",
                address: "testing add"
            },
            {
                name: "sab2",
                rollno: 4,
                sclass: "5e",
                address: "testing add"
            },
            {
                name: "sab3",
                rollno: 5,
                sclass: "5e",
                address: "testing add"
            },
        ]);

        await findoneRecord(client,"sahi6");
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
main().catch(console.error);

// get list of db 
async function listdb(client){
    const dblist = await client.db().admin().listDatabases();

    console.log("Databases: ");
    dblist.databases.forEach(db => {
        console.log(db);
    });
}

//insert single record or create listing or collection
async function createlisting(client, newcollection){
    const result = await client.db('myfirstdb').collection("tesing").insertOne(newcollection);
    console.log(result);
}

//insert multiple record or create listing or collection
async function createMultiplelisting(client, newcollection){
    const result = await client.db('myfirstdb').collection("tesing").insertMany(newcollection);
    console.log(result);
}

// find one record
async function findoneRecord(client, searchcollection){
    const result = await client.db('myfirstdb').collection("tesing").findOne({name: searchcollection});
    console.log(result);
}

async function findRecord(client, searchcollection){
    const result = await client.db('myfirstdb').collection("tesing").findOne({name: searchcollection});
    console.log(result);
}
