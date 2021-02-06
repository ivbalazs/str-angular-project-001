import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();
  cols: ITableCol[] = this.config.tableCols;

  //products: Product[] = this.productService.list;

  //currentProduct: Product = new Product();

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) { }

  ngOnInit(): void { }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      updatedProduct => console.log(updatedProduct)
    );
  }

  onDelete(product: Product): void {
    this.productService.remove(product).subscribe(
      () => console.log('deleted')
    );
  }

}
  
  
  // selectButtonClick(product: Product): void {
  //   this.currentProduct = product;
  // }

  // onUpdateButtonClick(product: Product): void {
  //   this.productService.updateProduct(product)
  // }
  
  // onDeleteButtonClick(product: Product): void {
  //   this.productService.removeProduct(product);
  // }
//}
