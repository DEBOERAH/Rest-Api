const express = require('express');

const router = express.Router();
const Studentslearn = require('../models/Studentslearn');

// get all students
router.get('/all-students', async (req, res) => {
    try {
        const students = await Studentslearn.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 




//  creata new student
router.post('/new-student', async (req, res) => {
    //    extract data from request body

    const { firstname, lastname, email, fulladdress, dateofbirth, phone, gender, stclass, isStudent, username, password } = req.body;

    try {
        // validate data
        if (!firstname || !lastname || !email || !fulladdress || !dateofbirth || !phone || !gender || !stclass ) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // create new student
        const student = new Studentslearn({
            firstname,
            lastname,
            email,
            fulladdress,
            dateofbirth,
            phone,
            gender,
            stclass,
            // isStudent,
            // username,
            // password
        });

        // save student to database
     const newStudent = await student.save();
    //  send response
    // res.status(201).json(newStudent , "student created successfully");
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    
    // }
    res.status(201).json({
        newStudent: newStudent,
        message: "Student created successfully"
    });
} catch (error) {
    res.status(500).json({ message: error.message });
}




});



// fetch single student
router.get('/student/:id', async (req, res) => {
    try {
        const student = await Studentslearn.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// to delete student
router.delete('/delete-student/:id', async (req, res) => {
    try {
        const student = await Studentslearn.findByIdAndDelete(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





module.exports = router;