import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product?:Product;
  productsList:Product[] = productsList;
  loading:boolean = true;
  color?:string

  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params => {
        console.log(params);
        console.log(params['id']); //Este nombre debe ser el mismo nombre definido en app-routing.module.ts
        // Obtener los parámetros de la ruta y usarlos en el componente.
        // Por ejemplo, para mostrar el detalle de un producto específico.
        this.product = this.productsList.find(product => product.id == params['id']);
        this.color = this.product?.price as number >= 10 ? 'red' : '';
        this.loading = false;
      });
    }, 1500);
  }
}
