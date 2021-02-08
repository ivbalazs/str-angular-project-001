import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  // categoryProducts: Product[] = this.productService.randomFiveCategoryProducts(2);
  // allCategoryProducts: Product[] = this.productService.allSameCategoryProducts(2);
  
  productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.catId === 2 && product.featured).sort(() => 0.5 - Math.random()).slice(0, 5))
  );

  productListAll$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.catId === 2 ) )
  );


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
