const carController = {};

carController.getCars = (req, res) => {
    res.json({
        status: 'Aqui irán los autos'
    });
}


carController.createCar = function() {

}


carController.getCarById = (req, res) => {
    res.json({
        status: 'Aqui se van a buscar autos por Id'
    });
}

carController.updateCar = (req, res) => {
    res.json({
        status: 'Aqui se van a actualizar autos por Id'
    });
}

carController.deleteCar = (req, res) => {
    res.json({
        status: 'Aqui se van a Eliminar autos por Id'
    });
}


module.exports = carController;