import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
     name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], search: string, key: string = ''): any[] {

    if (!Array.isArray(value) || !search || !key)
      return value;

    return value.filter(product => product[key].toString().toLowerCase().includes(search.toLowerCase()))

  }


}



