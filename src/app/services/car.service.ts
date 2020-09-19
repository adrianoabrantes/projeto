import { Car } from 'src/app/models/car';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url).pipe(
      retry(2)
    );
  }
}
