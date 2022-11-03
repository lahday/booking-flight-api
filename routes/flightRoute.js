
const router = require('express').Router(); 

const controllers = require("../controllers/flightController");
router
.get('/', controllers.getFlights)
.post('/', controllers.createFlight)
.get('/:id', controllers.getFlight)
.put("/:id", controllers.updateFlight)
.delete("/:id", controllers.deleteFlight);


module.exports = router;

