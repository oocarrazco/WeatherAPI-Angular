import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherapiService {
  // appid for doing the request
  appid: string;

  constructor(private http: HttpClient) {
    this.appid = environment.appid;
  }

  /* Service for requesting the API using the cityName, 
   stateCode (the same countryCode), and de appid */
  getWeatherData(cityName: string, stateCode: string) {
    
    // http request to weather API
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode}&appid=${this.appid}&units=metric`
    );
  }
}
