import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Root } from 'src/app/shared-m/model/interfaces';
import { ProcessesService } from 'src/app/shared-m/services/restaurants and hotels/processes.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherForm!: FormGroup;

  constructor(private service: ProcessesService) {}

  ngOnInit(): void {
    this.weatherForm = new FormGroup({
      cityField: new FormControl(null),
    });
  }

  weatherData!: Root;

  onFormSubmit(cityField: string) {
    this.service
      .getWeatherByCity(cityField)
      .subscribe((res) => (this.weatherData = res));
  }
}
