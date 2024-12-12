const express = require("express");
const fs = require("fs");
const router = express.Router();

//Array with the names of the files that exist in the current path.
const PATH_ROUTES = __dirname; 

//Remove the extension so it can access the file
const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

//Look for the file
fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`))
  }
});

module.exports = router;
