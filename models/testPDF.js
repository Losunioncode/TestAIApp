import mongoose from 'mongoose';


const testSchema = mongoose.Schema({
    
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        minLength: 4,
        requred: true
    
    },
    content: {
        type: String,
        required: true
    }
})

testSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      
    delete returnedObject.__v
    }
})










const TestAIPDF = mongoose.models.TestPDF || mongoose.model('TestPDF', testSchema)

export default TestAIPDF