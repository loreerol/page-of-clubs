const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load User model
const User = require("../../models/User");

// @route   GET api/auth/test
// @desc    Tests auth routes
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Auth Works" }));

// @route   GET api/auth/register
//@desc     Register user
//@access   Public
router.post("/register", (req, res) => {
  User.findOne({ name: req.body.name }).then(user => {
    if (user) {
      return res.status(400).json({ name: "Name already exists " });
    } else {
      const newUser = new User({
        name: req.body.name,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/auth/login
// @desc    Login / Return JWT
// @access  Public

router.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  // Find user by name
  User.findOne({ name }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ name: "User not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched

          const payload =  { name: user.name }

        // Sign Token
        jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        });
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

// @route   GET api/auth/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({msg: 'success'});
});

module.exports = router;
