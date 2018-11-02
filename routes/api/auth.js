const express = require ('express');
const router = express.Router();

// Load User model
const User = require('../../models/User');

// @route   GET api/auth/test
// @desc    Tests auth routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Auth Works"}));

// @route   GET api/auth/test
// @desc    Tests auth routes
// @access  Public

module.exports = router;
