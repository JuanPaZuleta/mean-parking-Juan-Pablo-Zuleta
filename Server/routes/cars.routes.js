const express = require('express');
const router = express.Router();


const carController = require('../controllers/car.controller'); //funciones con los autos.
router.get('/', carController.getCars);
router.post('/', carController.createCar);
router.get('/:id', carController.getCarById);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;