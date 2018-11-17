const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Book Model
const Book = require("../../models/Book");

//@route  Post api/book/add
//@desc   Add a new book
//@access Private
router.get(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get fields
    const bookFeilds = {};
    if (req.body.title) bookFeilds.title = req.body.title;
    if (req.body.author) bookFeilds.author = req.body.author;

    // Check if book title exists

    // Book.findOne({title: bookFeilds.title}).then(book) => {
    //   if(book){
    //     errors.title = 'that title already exists';
    //     res.status(400).json(errors);
    //   }
    // Save Profile
    // new Book(bookFeilds).save().then(book => res.json(book));
    // }
  }
);

module.exports = router;
