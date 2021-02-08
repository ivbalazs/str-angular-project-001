import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit {

  @Input() productList$: Observable<Product[]>;  

  constructor() { }

  ngOnInit(): void {
  }

}
