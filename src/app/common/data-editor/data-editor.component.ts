import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() selectClick: EventEmitter<Product> = new EventEmitter();
  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectButtonClick(product: Product): void {
    this.selectClick.emit(product);
  }

  onUpdateButtonClick(product: Product): void {
    this.updateClick.emit(product);
  }

  onDeleteButtonClick(product: Product): void {
    this.deleteClick.emit(product);
  }
}
