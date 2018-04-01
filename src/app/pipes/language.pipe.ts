import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const languages = {
      es: 'SPANISH',
      en: 'ENGLISH',
      fr: 'FRENCH',
      default: 'LANGUAGE',
    };
    return languages[value] || languages['default'];
  }

}
