const express = require("express");
const router = express.Router();

const {fetchTasks} = require("../controllers/taskController");

router.get("/", fetchTasks);

module.exports = router;
