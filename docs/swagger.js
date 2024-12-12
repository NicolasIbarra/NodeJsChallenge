const swaggerJsdoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "REST Service",
    description: "Hi there, this is a challenge using Swagger and NodeJS.",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3001/api",
    },
  ],
  components: {
    schemas: {
      courses: {
        type: "object",
        required: ["userId"],
        properties: {
          userId: {
            type: "string",
          },
          courseList: {
            type: "array", 
            items: { 
              type: "object",
              properties: {
                desiredCourse: {
                  type: "string",
                },
                requiredCourse: {
                  type: "string",
                },
              },
            }
          }
        }
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;
