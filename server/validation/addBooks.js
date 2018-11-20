const validator = require("validator");
import isEmpty from "./is-empty";

module.exports = function validateAddBookInput(data) {
  let errors = {};

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = "Title must be between 2 and 30 characters";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
