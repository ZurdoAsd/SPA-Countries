const express = require("express");
const router = express.Router();


const {getActivities,createActivity} = require("../controlllers/ActivityControler");

// router.post("/", createActivity);
router.get("/", getActivities);
router.post("/", createActivity);


module.exports = router;
