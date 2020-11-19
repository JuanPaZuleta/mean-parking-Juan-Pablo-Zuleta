const express = require('express');
const router = express.Router();


const carControl = require('../controllers/car.controller'); //funciones con los autos.
router.get('/', carControl.getCars);
router.post('/', carControl.createCar);
router.get('/:id', carControl.getCarById);
router.put('/:id', carControl.updateCar);
router.delete('/:id', carControl.deleteCar);

module.exports = router;