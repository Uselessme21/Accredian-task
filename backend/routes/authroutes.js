const express = require('express');
const authController = require('../controllers/authcontrollers');

const router = express.Router();

//  API endpoints
router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
