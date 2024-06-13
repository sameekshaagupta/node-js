const dbConnect = require('./mongodb')

const insert = async () => {
    let db =  await dbConnect();
    let result = await db.insertMany(
        [
            {name:'moksha', rollno:'22BCP366', number:9087564734},
            {name:'devam', rollno:'22BCP319', number:9087764734},
            {name:'esha', rollno:'22BCP410', number:908004734},
        ]
    )
    if(result.acknowledged){
        console.log("Inserted successfully")
    }
    else{
        console.log("Not inserted")
    }
}
insert()
