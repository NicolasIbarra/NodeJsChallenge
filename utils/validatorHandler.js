const { validationResult } = require("express-validator");

/**
 * Function to validate the data.
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Return to controller
 * @returns
 */
const VALIDATE_RESULT = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    res.status(403);
    res.send({ errors: err.array() });
  }
};

module.exports = VALIDATE_RESULT;
