import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherapiService {
  // appid for doing the request
  appid = 'c5e3617a1812a15d6384898fc3348fe5';

  constructor(private http: HttpClient) {}

  /* Service for requesting the API using the cityName, 
   stateCode (the same countryCode), and de appid */
  getWeatherData(cityName: string, stateCode: string) {
    
    // http request to weather API
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode}&appid=${this.appid}&units=metric`
    );
  }
}
