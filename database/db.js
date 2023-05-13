import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async () => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.qubxdev.mongodb.net/?retryWrites=true&w=majority`;
    try{
    await mongoose.connect(URL, { useUnifiedTopology: true });
   console.log("Db succesfully connected");
    }catch(error){
        console.log("error while connecting database", error.message);
    }
}

export default Connection