import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}}/api/profile`, // your backend URL
});

// Register new profile
export const registerProfile = (formData) => API.post('/register', formData);

// Update profile
export const updateProfile = (id, formData) => API.put(`/update/${id}`, formData);

// Get single profile
export const getProfile = (id) => API.get(`/${id}`);
