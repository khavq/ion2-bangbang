import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Product} from '../../providers/product/product';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ProductDetailPage } from '../../pages/product-detail/product-detail'

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Product]
})
export class HomePage {
  
  products: any;

  // let self = this;
  constructor(private navController: NavController,
  	public pProduct: Product) {
    // let self = this;
    // console.log("self:", self);
  	this.navController = navController;
    // this.products = af.list('/products');
  }

  itemTapped(event, item) {
    this.navController.push(ProductDetailPage, {
      item: item
    });
  }

  ngOnInit() {
    this.pProduct.getAllProducts().subscribe((data: Array<any>) => {
        console.log(data)
        this.products = data;
    });  
  }

  
}
