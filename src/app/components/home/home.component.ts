import { AllproductData } from './../../models/product-data';
import { ProductDataService } from './../../services/product-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  productdata : AllproductData[];
  constructor(private dataService : ProductDataService) { }

  ngOnInit(): void {

    this.dataService.getProductData()
    .subscribe(
      {
        next:(result)=>{
          this.productdata = result;
        }
      }
    )
  }
}
