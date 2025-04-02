
const createEmployee = async (req, res) => {
    try {
        const body = req.body;
        body.profileImage = req.file ? req.file?.path : null;
        const emp = new employeeModel(body);
        await emp.save();
        res.status(201).json({
            message: "Employee Created",
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            sucess: false,
            error: error
        })
    }
}

module.exports = {
    createEmployee
}