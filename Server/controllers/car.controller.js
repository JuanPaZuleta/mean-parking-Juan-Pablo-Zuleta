const car = require("../models/car");


const carCtrl = {};

carCtrl.getCars = async(req, res) => {
    const cars = await car.find()

    res.json(cars);
}


carCtrl.createCar = function() {

}


carCtrl.getCarById = (req, res) => {
    res.json({
        status: 'Aqui se van a buscar autos por Id'
    });
}

carCtrl.updateCar = (req, res) => {
    res.json({
        status: 'Aqui se van a actualizar autos por Id'
    });
}

carCtrl.deleteCar = (req, res) => {
    res.json({
        status: 'Aqui se van a Eliminar autos por Id'
    });
}


module.exports = carCtrl;