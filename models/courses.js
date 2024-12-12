const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Courses = sequelize.define(
  "courses",
  {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseList: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Courses;
