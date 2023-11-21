import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant, Root } from '../../model/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProcessesService {

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8080/api/v1/restaurants");
  }

  getRestaurantById(id: String): Observable<Restaurant> {
    return this.http.get<Restaurant>("http://localhost:8080/api/v1/restaurants/" + id);
  }

  getAllHotels(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8080/api/v1/hotels");
  }

  getHotelById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>("http://localhost:8080/api/v1/hotels/" + id);
  }

  getWeatherByCity(city: string): Observable<Root> {
    return this.http.get<Root>("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=5be1d1ccbcddb30cd1b69f953f7e8042&units=metric")
  }
}
