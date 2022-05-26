const express = require("express");
const router = express.Router();

const { getCountriesById, getCountries } = require("../controlllers/CountryControler");

router.get("/", getCountries);
router.get("/:id", getCountriesById);

module.exports = router;
