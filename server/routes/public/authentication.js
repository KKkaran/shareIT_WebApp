const express = require("express");
const { handleNewUser, getAllUsers } = require("../../controllers/authentication");
const router = express.Router();

router
  .get("/all", getAllUsers)
  .post("/new", handleNewUser);

module.exports = router;
