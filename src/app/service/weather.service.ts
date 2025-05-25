import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '55934031ce720e43ea83aa6cdb7e750a';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) { }
  
  searchWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

    return this.http.get(url)

  }
}
