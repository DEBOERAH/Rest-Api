const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    fulladdress: { type: String, required: true },
    dateofbirth: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    stclass: { type: String, required: true },
    isStudent: { type: Boolean, default: false },
    username: { type: String, required: true, default: 'student' },
    password: { type: String, required: true, default: 'Pass' }

    

})

const Studentslearn= mongoose.model('Studentslearn', studentSchema);
module.exports = Studentslearn