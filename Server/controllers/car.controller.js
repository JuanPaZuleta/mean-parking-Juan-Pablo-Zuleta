const car = require("../models/car");


const carCtrl = {};

carCtrl.getCars = async(req, res) => {
    const cars = await car.find()
    res.json(cars);
}

carCtrl.createCar = async(req, res) => {
    const carr = new car(req.body);
    await carr.save();
    res.json({ 'status': 'Auto ingresado.' });
}

carCtrl.getCarById = async(req, res) => {
    const carr = await car.findById(req.params.id);
    res.json(carr);
}

carCtrl.updateCar = async(req, res) => {
    const { id } = req.params;
    const carr = {
        marca: req.body.marca,
        anio: req.body.anio,
        modelo: req.body.modelo,
        propietario: req.body.propietario,
        estado: req.body.estado,
        deuda: req.body.deuda
    }
    await car.findByIdAndUpdate(id, { $set: carr }, { new: true });
    res.json({ status: 'Auto modificado' });
    //res.json({ status: 'Auto modificado' }, car.findById(req.params.id));
}

carCtrl.deleteCar = async(req, res) => {
    await car.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Auto eliminado'
    });
}


module.exports = carCtrl;