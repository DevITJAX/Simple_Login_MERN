const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String, 
})

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);
module.exports = EmployeeModel ;