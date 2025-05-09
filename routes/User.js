const express = require('express');
const router = express.Router();

const { sendOTP, signup, login, changePassword } = require("../controllers/Auth");
const { resetPasswordToken, resetPassword } = require("../controllers/ResetPassword");
const { auth, isStudent, isInstructor, isAdmin } = require('../middlewares/auth');


router.post('/sendOTP', sendOTP);
router.post('/signup', signup);
router.post('/login', login);
router.post('/changePassword', auth, changePassword);
router.post('/resetPasswordToken', resetPasswordToken);
router.post('/resetPassword', resetPassword);

module.exports = router;