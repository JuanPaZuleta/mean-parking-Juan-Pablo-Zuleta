import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  selectedCar: Car;
  cars!: Car[];

  readonly URL_API = 'http://localhost:4000/api/cars';

  constructor(private http: HttpClient) {
    this.selectedCar = new Car();
   }

  getCars(){
    return this.http.get(this.URL_API);
  }

  postCar(car: Car){
    return this.http.post(this.URL_API, car);
  }

  putCar(car: Car){
    return this.http.put(this.URL_API + `/${car._id}`, Car);
  }

  deleteCar(_id: string){
    return this.http.delete(this.URL_API +`/${_id}`);
  }

}
