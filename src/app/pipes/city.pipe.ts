import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const cities = {
      MDE: 'Medellín',
      BOG: 'Bogotá',
      AUS: 'Austin Tx.',
      default: 'Medellín',
    };
    return cities[value] || cities['default'];
  }

}
