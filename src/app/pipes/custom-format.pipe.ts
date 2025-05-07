import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'customFormat',
})
export class CustomFormatPipe implements PipeTransform {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  transform(value: any): any {
    //  console.log(value)
    if (!value) return;
    if (value instanceof Date) {
      // console.log('isDate')
      return formatDate(value, "EEE, dd 'de' MMM. 'de' y HH:mm", 'es');
    } else if (typeof value === 'string') {
      const translatedString = this.translate.instant(value);
      return translatedString;
    } else {
      return value;
    }
  }
}
