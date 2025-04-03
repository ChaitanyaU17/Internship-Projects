const {createEmployee, getAllEmployees, getEmployeeById} = require("../Controllers/EmployeeController");
const { cloudinaryFileUploader } = require("../Middlewares/FileUploader");

const routes = require('express').Router();

routes.get('/', getAllEmployees);

routes.post('/', cloudinaryFileUploader.single('profileImage'), createEmployee);

routes.get('/:id', getEmployeeById);

module.exports = routes;