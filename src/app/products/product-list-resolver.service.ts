import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from './product';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class ProductListResolver implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}

  resolve(): Observable<Product[]> {
    return this.productService.getProducts();
  }
}
