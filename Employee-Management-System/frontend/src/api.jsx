
const BASE_URL = 'http://localhost:8080';

export const GetAllEmployess = async (search = '', page = 1, limit = 5) => {
    const url = `${BASE_URL}/api/employees?search=${search}&page=${page}&limit=${limit}`;
  
    try {
      const options = {
        method: 'GET',
        'Content-Type': 'application/json'
      };
      const result = await fetch(url, options);
      const data = await result.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Fetch failed:", error);
      return error;
    }
  };
  
  export const CreateEmployee = async (empObj) => {
    const url = `${BASE_URL}/api/employees`;
  
    try {
      const formData = new FormData();
      for (const key in empObj) {
        formData.append(key, empObj[key]);
      }
  
      const options = {
        method: "POST",
        body: formData, 
      };
  
      const result = await fetch(url, options);
      const data = await result.json();
  
      return {
        success: result.ok,
        message: data.message || "Employee created successfully",
      };
    } catch (error) {
      console.error("Fetch failed:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  };
  
  
  export const UpdateEmployeeById = async (empObj, id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
  
    try {
      const formData = new FormData();
      for (const key in empObj) {
        formData.append(key, empObj[key]);
      }
  
      const options = {
        method: "PUT",
        body: formData, 
      };
  
      const result = await fetch(url, options);
      const data = await result.json();
  
      return {
        success: result.ok,
        message: data.message || "Employee Updated successfully",
      };
    } catch (error) {
      console.error("Fetch failed:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  };

  export const DeleteEmployeeById = async (id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
  
    try {
  
      const options = {
        method: "DELETE",
        'Content-Type': 'application/json',
      };
  
      const result = await fetch(url, options);
      const data = await result.json();
  
      return {
        success: result.ok,
        message: data.message || "Employee Deleted successfully",
      };
    } catch (error) {
      console.error("Fetch failed:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  };

  export const GetEmployeeById = async (id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
  
    try {
  
      const options = {
        method: "GET",
        'Content-Type': 'application/json',
      };
  
      const result = await fetch(url, options);
      const data = await result.json();
      return data;
    } catch (error) {
      console.error("Fetch failed:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  };

  
