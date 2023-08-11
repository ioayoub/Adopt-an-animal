const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const animalRoutes = require("./routes/animals.routes");

router.use("/animals", animalRoutes);

/* ************************************************************************* */

module.exports = router;
