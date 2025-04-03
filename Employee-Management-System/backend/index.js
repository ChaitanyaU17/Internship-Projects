const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./Models/db');
const EmployeeRouter = require('./Routes/EmployeeRoutes');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Employee management server is running..");
});

app.use('/api/employees', EmployeeRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on ${PORT}`);
});
