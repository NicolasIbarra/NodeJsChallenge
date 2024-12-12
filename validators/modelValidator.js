const { check } = require("express-validator");
const VALIDATE_RESULT = require("../utils/validatorHandler");

const VALIDATOR_COURSES_MODEL = [
    check("userId").exists().notEmpty(),
    (req, res, next) => VALIDATE_RESULT(req, res, next),
];

module.exports = { VALIDATOR_COURSES_MODEL };