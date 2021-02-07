import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  cols: ITableCol[] = this.config.tableCols;

  @Input() productList$: Observable<Product[]>;
  @Input() phrase: string = '';
  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();

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
