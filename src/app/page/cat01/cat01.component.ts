import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  // categoryProducts: Product[] = this.productService.randomFiveCategoryProducts(1);  
  // allCategoryProducts: Product[] = this.productService.allSameCategoryProducts(1);
  
  productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.catId === 1 && product.featured ) )
  );

  productListAll$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.catId === 1 ) )
  );


  constructor(private productService: ProductService) { }

  ngOnInit(): void {  }
  
  

}