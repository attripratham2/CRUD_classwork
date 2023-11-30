const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{
        type: String
    },
    Batch:{
        type: Number
    },
    age:{
        type: Number
    },
    email:{
        type: String
    }
} , {timestamps: true})

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;