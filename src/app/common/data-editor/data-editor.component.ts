import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { map, tap } from 'rxjs/operators';

interface IPageBtn {
  page: number;
}

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  cols: ITableCol[] = this.config.tableCols;
  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Product());
  productsNum: number = 0;
  pageSize: number = 10;
  pageStart: number = 1;
  currentPage: number = 1;

  @Input() phrase: string = '';
  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();
  @Input() productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map( (products: Product[]) => products.filter( product => product.catId === 1 ) ),
    tap( products => this.productsNum = products.length )
  );

  get paginator(): IPageBtn[] {
    const pages = [];
    for (let i = 0; i < this.productsNum / this.pageSize && pages.length < 10; i++) {
      const page = this.pageStart + i;
      pages.push({page});
    }
    return pages;
  }
  get pageSliceStart(): number {
    const index = this.currentPage - 1;
    return index === 0 ? 0 : (index * this.pageSize);
  }
  get pageSliceEnd(): number {
    return this.pageSliceStart + this.pageSize;
  }

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

  onPaginate(ev: Event, btn: IPageBtn): void {
    ev.preventDefault();
    this.currentPage = btn.page;
    this.pageStart = (btn.page - 5) < 1 ? 1 : (btn.page - 5);
    console.log(btn);
  }
}
