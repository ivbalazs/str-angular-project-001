import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(productList: Product[]): Product[] {
    if (!Array.isArray(productList)) {
      return productList;
    }
    return productList.sort(() => 0.5 - Math.random());
  }
  
}
