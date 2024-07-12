import mongoose from 'mongoose';
import envConfig from '../config/envConfig';


const env = envConfig();
const mongoURL ="mongodb+srv://lavishjain162002:Lavish16@cluster0.ckfrrhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/roles";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("MongoDB connected");



    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
        process.exit(1);
    }
};


export default connectDB;
