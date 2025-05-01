const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const {
  registerProfile,
  updateProfile,
  getProfile
} = require('../controllers/userProfileController');

router.post('/register', upload.single('profileImage'), registerProfile);
router.put('/update/:id', upload.single('profileImage'), updateProfile);
router.get('/:id', getProfile);

module.exports = router;
