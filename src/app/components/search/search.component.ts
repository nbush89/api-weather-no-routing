import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
cityInput: string = ""
results: any;
showWeather: boolean = false
  constructor(private service: WeatherService) { }

  ngOnInit(): void {
  }
  searchCity(){
    this.service.getData(this.cityInput).subscribe(data => {
      this.results = data
      this.cityInput = ""
    })
  }
}

