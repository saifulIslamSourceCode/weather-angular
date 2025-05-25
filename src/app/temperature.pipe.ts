import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, scale: 'C' | 'F'): string {
    if(scale == 'F') {
      return `${ (value * 9 / 5 + 32).toFixed(1) }°F`;
    } else {
      return `${value.toFixed(1)} °C`;
    }
  }

}
