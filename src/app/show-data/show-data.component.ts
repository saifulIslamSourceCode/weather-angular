import { Component } from '@angular/core';
import { TemperaturePipe } from '../temperature.pipe';

@Component({
  selector: 'app-show-data',
  imports: [TemperaturePipe],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.scss'
})
export class ShowDataComponent {

}
