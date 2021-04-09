import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from 'src/app/services/weatherapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cityName: string;
  stateCode: string;
  
  // fields
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
  showInfo = false;


  constructor(private weatherApiService: WeatherapiService) {}

  seletCity(cityName: string, stateCode: string) {
    this.cityName = cityName;
    this.stateCode = stateCode;

    this.weatherApiService
      .getWeatherData(cityName, stateCode)
      .subscribe((data: any) => {
        this.error = false;
        this.showInfo = true;
        this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        this.description = data.weather[0].description;
        this.name = data.name;
        this.wind = data.wind.speed * 18/5;
        this.temp = data.main.temp;
        this.tempMax = data.main.temp_max;
        this.tempMin = data.main.temp_min;
        this.humidity = data.main.humidity;
        this.feelsLike = data.main.feels_like;
      }, (serviceError) => {
        this.error = true;
        this.showInfo = false;
        this.errorMesage = serviceError.error.message;
      });
  }
}
