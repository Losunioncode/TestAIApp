import mongoose , { Schema, model, models } from 'mongoose';

import mongooseUniqueValidator from 'mongoose-unique-validator';

const UserSchema = new Schema({

    email: {
        type: String,
        unique: [true, 'Email already exist'],
        required: [true, 'Email is required'],
    },
    name: {
        type: String,
        required: true  
    },
    image: {
        
        type: String,
        required: false
    },
    PDFTests: [
       { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TestPDF'
       }
    ]
})

UserSchema.plugin(mongooseUniqueValidator)

const User = mongoose.models.User || mongoose.model('User', UserSchema)




export default User