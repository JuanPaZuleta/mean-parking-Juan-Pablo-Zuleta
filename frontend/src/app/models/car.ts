export class Car {

    constructor(_id='', marca ='', anio='', modelo='', propietario='', estado=false, deuda=0){
        this._id = _id;
        this.marca = marca;
        this.anio = anio;
        this.modelo = modelo;
        this.propietario = propietario;
        this.estado = estado;
        this.deuda = deuda;
    }

    _id: string;
    marca: string;
    anio: string;
    modelo: string;
    propietario: string;
    estado: boolean;
    deuda: number;
}
