import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {

  countclick = 0
  constructor() { }

  ngOnInit(): void {
     this.countclick
  }

  count(){
    this.countclick = this.countclick + 1;
    console.log(this.countclick);
  }

}
