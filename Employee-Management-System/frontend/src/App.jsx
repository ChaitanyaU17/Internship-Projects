import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import EmployeeManagementApp from "./components/EmployeeManagementApp";
import EmployeeDetails from "./components/EmployeeDetails";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/employee" />} />
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
