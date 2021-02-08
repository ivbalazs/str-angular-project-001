import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  cols: ITableCol[] = this.config.tableCols;
  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Product());
  productsNum: number;

  @Input() phrase: string = '';
  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();
  @Input() productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map( (products: Product[]) => products.filter( product => product.catID === 1 ) ),
    tap( products => this.productsNum = products.length )
  );

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

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
