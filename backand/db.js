const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://abhijeet610singh:IeDWVdrOWISJJz6J@cluster0.hfuxq8u.mongodb.net/Code_hub?retryWrites=true&w=majority";

const connectToMongo = () =>{
    mongoose.connect(process.env.mongoURI || mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
