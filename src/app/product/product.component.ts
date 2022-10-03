import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  constructor() { }
//nginit
  ngOnInit(): void {
    this.product = [
      new Product("john",  5000, 1),
      new Product("Ram",  6000 , 2),
      new Product("Fran",  10000, 3),
    ];
  }

}
