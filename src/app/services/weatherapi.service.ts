import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherapiService {
  appid = 'c5e3617a1812a15d6384898fc3348fe5';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string, stateCode: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode}&appid=${this.appid}&units=metric`
    );
  }
}
