import mongoose from 'mongoose';

let isConnected = false;


export const connectToDB = async () => {

    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log('MongoDB is already connected');
        return
    
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'ExamTestAI',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    
        isConnected = true
        console.log('MongoeDB connected')
    }catch(err){
        console.log(`The error has occured: ${err.message}`)
    }

}                                                                                                             