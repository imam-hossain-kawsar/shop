import { ProductDataService } from './../../services/product-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { AllproductData } from 'src/app/models/product-data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('countclick')
  countclick;

  productdata : AllproductData[];
  constructor(private dataservice: ProductDataService) { }

  ngOnInit(): void {
    this.dataservice.getProductData()
    .subscribe(
      {
        next:(result)=>{
          this.productdata = result;
          this.countclick = this.countclick;
        }
      }
    )
  }

}
