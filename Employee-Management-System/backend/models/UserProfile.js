const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },

  department: {
    type: String,
    required: true
  },

  salary: {
    type: Number,
    required: true
  },

  profileImage: {
    public_id: String,
    url: String
  }
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', userProfileSchema);
