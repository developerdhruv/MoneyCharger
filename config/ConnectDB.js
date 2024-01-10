const mongoose = require('mongoose');
const dotenv = require('dotenv');

const MONGO_URL = "mongodb+srv://dhruvdev:Dhruv@atlascluster.osd7kat.mongodb.net/ExpenseApp";

//env setup
dotenv.config();

//connect to db

const ConnectDB = async () => {
    try{
        await mongoose.connect(MONGO_URL)
        console.log(`Server running On ${mongoose.connection.host}`)

    }catch(error){
        console.log(`${error}`)
        

    }
}

module.exports = ConnectDB;