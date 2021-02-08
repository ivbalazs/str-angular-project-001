import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // featuredProducts: Product[] = this.productService.randomFiveFeaturedProducts;
  // discountProducts: Product[] = this.productService.randomFiveDiscountProducts;
  
  productListFeatured$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.featured ) )
  );
  
  productListDiscounted$: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter( product => product.discounted ) )
  );


  constructor(private productService: ProductService) { }

  ngOnInit(): void {  }

}
