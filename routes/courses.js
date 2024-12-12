const { VALIDATOR_COURSES_MODEL } = require("../validators/modelValidator");
const { OrderCourses } = require("../controllers/courseController");

const express = require("express");
const router = express.Router();


/**
 * Order the list of courses.
 * @openapi
 * /courses/order:
 *      post:
 *          tags:
 *              - Courses
 *          summary: "Order"
 *          description: "Endpoint to order the list of courses."
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/courses"
 *          responses:
 *              '200': 
 *                  description: List created successfully
 *              '403': 
 *                  description: Validation error 
 */
router.post("/order", VALIDATOR_COURSES_MODEL, OrderCourses);

module.exports = router;