import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarService } from '../../services/car.service';

declare var M: any;//variable para declarar un toast desde Materialize.com

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarService]
})
export class CarsComponent implements OnInit {

  constructor(public carService: CarService) {
    
  }

  ngOnInit() {
    this.getCars(); 
  }

  addCar(form: NgForm) {
    if(form.value._id){
      this.carService.putCar(form.value)
      .subscribe((res) =>{
        this.resetForm(form);
        M.toast({html: 'Auto actualizado'});//Toast para mensajes en pantalla.
        this.getCars();
      })
    } else { 
      this.carService.postCar(form.value)
      .subscribe((res) => {
        this.resetForm(form);
        M.toast({html: 'Auto ingresado'});//Toast para mensajes en pantalla.
        this.getCars(); 
      });
    }
    
  }

  getCars(){
    this.carService.getCars().subscribe(res => {
      this.carService.cars = res as Car[];
      console.log(res);
    });
  }

  editCar(car: Car){
    this.carService.selectedCar = car;
  }

  deleteCar(_id: string){
    if(confirm('¿estas seguro?')){
      this.carService.deleteCar(_id)
      .subscribe(res => {
        this.getCars();
      });
    }
    
    
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.carService.selectedCar = new Car();
    }
  }

}
