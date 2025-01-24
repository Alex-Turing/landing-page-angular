import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product?: IProduct;
  productsList: IProduct[] = [];
  loading: boolean = true;
  color?: string;

  constructor(private _route: ActivatedRoute, private _apiService:ApiService) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params:Params) => {  //params obtiene los valores del la url interna, es decir de la ruta
        console.log(params);
        console.log(params['id']); //Este nombre debe ser el mismo nombre definido en app-routing.module.ts
        // Obtener los parámetros de la ruta y usarlos en el componente.
        // Por ejemplo, para mostrar el detalle de un producto específico.

        this._apiService.getProductById(Number(params['id'])).subscribe({
          next:(data:IProduct) => {
            this.product = data;
            this.color = (this.product?.price as number) >= 200 ? 'red' : '';
            this.loading = false;
          },
          error: (err:any) => { // Se maneja el error en caso de que no se encuentre el producto en la base de datos.
            console.error(err);
            this.loading = false;
          }  
        })      
      }
    })
  }
}
