import { Component } from '@angular/core';
import { WeatherapiService } from 'src/app/services/weatherapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  cityName: string;
  stateCode: string;
  
  // fields for interacting with UI
  icon: string;
  name: string;
  wind: any;
  description: string;
  temp: number;
  tempMax: number;
  tempMin: number;
  humidity: number;
  feelsLike: number;
  
  // errors
  error: boolean = false;
  errorMesage: string;
  showInfo = false; // flag to show or hide the details card


  constructor(private weatherApiService: WeatherapiService) {}

  seletCity(cityName: string, stateCode: string) {
    
    this.cityName = cityName;
    this.stateCode = stateCode;

    this.weatherApiService
      .getWeatherData(cityName, stateCode)
      .subscribe((data: any) => { // Observable for the API 200-OK-respond
        this.error = false;
        this.showInfo = true;
        
        // Setting up all the fields for using them from the UI (HTML)
        this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`; // URL used for decoding icon to png format
        this.description = data.weather[0].description;
        this.name = data.name;
        this.wind = data.wind.speed * 18/5; // wind speed a simple unit convertion
        this.temp = data.main.temp;
        this.tempMax = data.main.temp_max;
        this.tempMin = data.main.temp_min;
        this.humidity = data.main.humidity;
        this.feelsLike = data.main.feels_like;
      }, (serviceError) => { // When the API responds with error
        this.error = true;
        this.showInfo = false;
        this.errorMesage = serviceError.error.message;
      });
  }
}
