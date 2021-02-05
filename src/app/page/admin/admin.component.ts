import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  products: Product[] = this.productService.list;

  currentProduct: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }

  selectButtonClick(product: Product): void {
    this.currentProduct = product;
  }

  onUpdateButtonClick(product: Product): void {
    this.productService.updateProduct(product)
  }
  
  onDeleteButtonClick(product: Product): void {
    this.productService.removeProduct(product);
  }
}
