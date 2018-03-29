import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value > 60) {
      return '#8BC34A';
    } else {
      return '#FF9800';
    }
  }

}
