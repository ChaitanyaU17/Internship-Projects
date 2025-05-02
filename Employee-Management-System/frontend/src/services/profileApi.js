import axios from 'axios';

const API = axios.create({

  baseURL: 'https://internship-projects-3.onrender.com/api/profile'
  // baseURL: `http://localhost:5000/api/profile` // your backend URL
});

// Register new profile
export const registerProfile = (formData) => API.post('/register', formData);

// Update profile
export const updateProfile = (id, formData) => API.put(`/update/${id}`, formData);

// Get single profile
export const getProfile = (id) => API.get(`/${id}`);
