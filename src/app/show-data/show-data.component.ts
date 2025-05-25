import { Component } from '@angular/core';
import { TemperaturePipe } from '../temperature.pipe';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../service/weather.service';
import { NgIf, CommonModule } from '@angular/common';



@Component({
  selector: 'app-show-data',
  imports: [
    TemperaturePipe,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    CommonModule
    
  ],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.scss'
})
export class ShowDataComponent {

  searchForm! : FormGroup;
  weather: any;

  constructor(private fb: FormBuilder,private service: WeatherService) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      city: [null, Validators.required]
    })
  }
  
  searchWeather() {
     const city = this.searchForm.get('city')?.value;

    this.service.searchWeatherByCity(city).subscribe({
      next: (res: any) => {
        console.log(res)
        this.weather = res;
      }
      
    })
    // console.log(this.weather);
  }

  //for the humidity
  toKmh(speed: string): string {
    return (Number(speed) * 3.6).toFixed(1);
  }
}
