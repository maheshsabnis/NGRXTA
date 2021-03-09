import { Categories, Manufacturers } from './../../models/app.constants';
import { ProductInfo } from './../../models/app.productinfo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createproduct-component',
  templateUrl: 'app.createproduct.view.html'
})
export class CreateProductComponent implements OnInit {
  product:ProductInfo;
  categories = Categories;
  manufacturers = Manufacturers;
  constructor() {
    this.product = new ProductInfo(0,'','','','','',0);
  }

  ngOnInit(): void { }

  clear():void {

  }
  save():void {

  }
}
