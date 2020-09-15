import { AllproductData } from './../../models/product-data';
import { ProductDataService } from './../../services/product-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-products',
  templateUrl: './sort-products.component.html',
  styleUrls: ['./sort-products.component.css']
})
export class SortProductsComponent implements OnInit {

  
  productdata : AllproductData[];
  constructor(private dataservice: ProductDataService) { }

  ngOnInit(): void {
    this.dataservice.getProductData()
    .subscribe({
      next:(result)=>{
        this.productdata = result;
      }
    })
  }
}
