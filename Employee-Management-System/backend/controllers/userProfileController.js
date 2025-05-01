const UserProfile = require('../models/UserProfile');

exports.registerProfile = async (req, res) => {
  try {
    const { name, email, gender, department, salary } = req.body;
    const profileImage = {
      public_id: req.file?.filename,
      url: req.file?.path
    };

    const user = new UserProfile({ name, email, gender, department, salary, profileImage });
    await user.save();
    res.status(201).json({ message: 'Profile created successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, gender, department, salary } = req.body;
    const profileImage = req.file ? {
      public_id: req.file.filename,
      url: req.file.path
    } : undefined;

    const updatedData = { name, gender, department, salary };
    if (profileImage) updatedData.profileImage = profileImage;

    const user = await UserProfile.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await UserProfile.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Profile not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
