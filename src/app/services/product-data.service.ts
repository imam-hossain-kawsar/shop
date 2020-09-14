import { AllproductData } from './../models/product-data';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private productdataURL = 'https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products';
  constructor(private http : HttpClient) {}

  getProductData(){

    return this.http.get(this.productdataURL).pipe(
      map(result=>{
        return <AllproductData[]>result;
      })
    )

  }

}
