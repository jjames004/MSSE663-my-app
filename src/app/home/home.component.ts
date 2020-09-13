import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ 
    templateUrl: 'home.component.html', 
    styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {
    user: User;

    


    cupcakePrice = '4.95';

  cupcakes = [
    {
      imgSrc: 'http://via.placeholder.com/900x900?text=chocolate+cupcake',
      altText: 'chocolate cupcake',
      type: 'Dark Chocolate Cupcake',
      price: this.cupcakePrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=vanilla+cupcake',
      altText: 'vanilla cupcake',
      type: 'Vanilla Cupcake',
      price: this.cupcakePrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=strawberry+cupcake',
      altText: 'strawberry cupcake',
      type: 'Strawberry Cupcake',
      price: this.cupcakePrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=mango+cupcake',
      altText: 'mango cupcake',
      type: 'Mango Cupcake',
      price: this.cupcakePrice
    }
  ]

  donutPrice = 1.95;

  donuts = [
    {
      imgSrc: 'http://via.placeholder.com/900x900?text=chocolate+donut',
      altText: 'chocolate donut',
      type: 'Chocolate Cake Donut',
      price: this.donutPrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=sprinkled+donut',
      altText: 'sprinked donut',
      type: 'Sprinkled Cake Donut',
      price: this.donutPrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=crueller',
      altText: 'crueller',
      type: 'Crueller',
      price: this.donutPrice
    }, {
      imgSrc: 'http://via.placeholder.com/900x900?text=jelly+donut',
      altText: 'jelly donut',
      type: 'Jelly Dount',
      price: this.donutPrice
    }
  ]

  popup = false
  name = 'Angular';

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}