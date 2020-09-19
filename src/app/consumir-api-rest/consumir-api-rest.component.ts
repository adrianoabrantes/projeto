import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from './../services/car.service';

@Component({
  selector: 'app-consumir-api-rest',
  templateUrl: './consumir-api-rest.component.html',
  styleUrls: ['./consumir-api-rest.component.css']
})
export class ConsumirApiRestComponent implements OnInit {
  car = {} as Car;
  cars: Car[];
  carSelected: any;
  carPrice: number;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  carSelect(car: Car) {
    this.carPrice = car.price;
  }

  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }
}
