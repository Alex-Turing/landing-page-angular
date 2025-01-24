import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  productsList?:IProduct[];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      this.productsList = data;
    })
  }
}
