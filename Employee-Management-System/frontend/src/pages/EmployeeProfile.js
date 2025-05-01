import React, { useState, useEffect } from "react";
import {
  registerProfile,
  updateProfile,
  getProfile,
} from "../services/profileApi";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const UserProfileForm = ({ userId, isEdit = false }) => {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    name: currentUser.firstName || "",
    email: currentUser.lastName || "",
    gender: "",
    department: "",
    salary: "",
    profileImage: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (isEdit && userId) {
      getProfile(userId).then((res) => {
        const data = res.data;
        setFormData({
          name: data.name || "",
          email: data.email || "",
          gender: data.gender || "",
          department: data.department || "",
          salary: data.salary || "",
          profileImage: null, // Set to null to allow the user to upload a new one
        });
        setPreview(data.profileImage?.url); // Display existing image if any
      });
    }
  }, [isEdit, userId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, profileImage: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitBtn = () => {
    toast.success("Profile Created succesfully");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    // Append form data, including image if exists
    for (let key in formData) {
      if (formData[key]) form.append(key, formData[key]);
    }

    try {
      if (isEdit) {
        await updateProfile(userId, form);
        alert("Profile updated successfully!");
      } else {
        await registerProfile(form);
        alert("Profile registered successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>{isEdit ? "Edit Employee Profile" : "Register Employee Profile"}</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {!isEdit && (
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">-- Select Gender --</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            name="salary"
            type="number"
            value={formData.salary}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Image</label>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {preview && (
          <div className="mb-3">
            <img
              src={preview}
              alt="Preview"
              className="img-thumbnail"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        )}

        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: "#213448",
            borderColor: "#213448",
            color: "#fff",
          }}
          onClick={() => submitBtn()}
        >
          {isEdit ? "Update Profile" : "Register Profile"}
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
