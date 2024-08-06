const mongodb=require("mongodb")
const mongoClient=mongodb.MongoClient
const connectionUrl='mongodb://127.0.0.1:27017'
const dbname='task1'
mongoClient.connect(connectionUrl,(error,data)=>{
    if(error){
        console.log('connection failed')
    }
    console.log('its ok')
    const db=data.db(dbname)
    ///////      insertOne 2            //////////
    db.collection('users').insertOne({
        name:'mohamed',
        age:23
    })
    .then((data)=>console.log(data.insertedId))
    .catch((error)=>console.log(error))
    db.collection('users').insertOne({
        name:'menna',
        age:20
    })
    .then((data)=>console.log(data.insertedId))
    .catch((error)=>console.log(error))
    /////////////       insertMany 10  5 of age 25          ///////////////
    db.collection('users').insertMany([
        {
            name:'mariem',
            age:18
        },
        {
            name:'ali',
            age:19
        },
        {
            name:'ahmed',
            age:20
        },
        {
            name:'salah',
            age:21
        },
        {
            name:'hesham',
            age:22
        },
        {
            name:'mahmoud',
            age:25
        },
        {
            name:'mostafa',
            age:25
        },
        {
            name:'abdo',
            age:25
        },
        {
            name:'moamen',
            age:25
        },
        {
            name:'safy',
            age:25
        },
    ])
    .then((data)=>console.log(data.insertedCount))
    .catch((error)=>console.log(error))
    ////////     find match age=25       /////////////////
    db.collection('users').find({age:25}).toArray((error,data)=>{
        if(error){
            console.log(error)
        }
        console.log(data)
    })
    db.collection('users').find({age:25}).limit(3).toArray((error,data)=>{
        if(error){
            console.log(error)
        }
        console.log(data)
    })
   ////////////////        update      ////////////
   db.collection('users').updateOne({_id:mongodb.ObjectId("66b22c9e611e7fe7a4239f67")},{
    $set:{name:'islam'},
    $inc:{age:3}
   })
   db.collection('users').updateOne({_id:mongodb.ObjectId("66b22d220550c27241c9c2d9")},{
    $set:{name:'mohamed'},
    $inc:{age:3}
   })
   db.collection('users').updateOne({_id:mongodb.ObjectId("66b22e52df9fbea8efe8184c")},{
    $set:{name:'radwa'},
    $inc:{age:3}
   })
   db.collection('users').updateOne({_id:mongodb.ObjectId("66b22e52df9fbea8efe8184d")},{
    $set:{name:'sandra'},
    $inc:{age:3}
   })
   .then((data)=>console.log(data.modifiedCount))
   .catch((error)=>console.log(error))
   db.collection('users').updateMany({},{
    $inc:{age:10}
   })
   .then((data)=>console.log(data.modifiedCount))
   .catch((error)=>console.log(error))
   ///////////////////      delete      //////////////
   db.collection('users').deleteMany({age:35})
   .then((data)=>console.log(data.deletedCount))
   .catch((error)=>console.log(error))
})