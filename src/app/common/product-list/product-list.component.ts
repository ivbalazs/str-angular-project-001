import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];
  currentProduct: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(product: Product): void {
    this.currentProduct = product;
  }

  onDeleteProduct(product: Product): void {
    this.currentProduct = new Product();
  }
}
