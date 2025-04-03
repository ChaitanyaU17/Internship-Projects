const EmployeeModel = require('../Models/EmployeeModel');

const createEmployee = async (req, res) => {
    try {
        const body = req.body;
        body.profileImage = req.file ? req.file.path : null;
        console.log("Request Body:", body);
        
        const emp = new EmployeeModel(body);
        await emp.save();
        
        res.status(201).json({
            message: "Employee Created",
            success: true,
        });
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: error.message, 
        });
    }
};

const getAllEmployees = async (req, res) => {
    try {
        const emps = await EmployeeModel.find({});
        
        res.status(200).json({
            message: "All Employees",
            success: true,
            data: emps
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: error.message, 
        });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const {id} = req.params;
        const emp = await EmployeeModel.findOne({_id: id});
        
        res.status(200).json({
            message: "Get Employee Details",
            success: true,
            data: emps
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: error.message, 
        });
    }
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById
}