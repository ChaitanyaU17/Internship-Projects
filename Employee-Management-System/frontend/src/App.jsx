import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import EmployeeManagementApp from "./components/EmployeeManagementApp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Navigate to="/employee" />} />
          <Route to="/employee" element={<EmployeeManagementApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
