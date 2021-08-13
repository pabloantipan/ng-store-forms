import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {
  @Input() product: Product;
  @Input() index: number;

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.product = {
      id: '',
      image: '',
      title: '',
      price: -1,
      description: '',
    };
    this.index = -1;
  }

  ngOnInit(): void {
    console.log('ng on init');
  }
  // ngDoCheck(){

  // }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change');
    console.log(changes);
  }

  ngOnDestroy() {
    console.log('byee');
  }

  addCart() {
    console.log('Add to cart');
    this.productClicked.emit(this.product.id);
  }
}
