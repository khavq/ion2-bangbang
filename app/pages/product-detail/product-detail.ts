import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ProductDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/product-detail/product-detail.html',
})
export class ProductDetailPage {

  constructor(private nav: NavController, navParams: NavParams) {
  	this.selectedItem = navParams.get('item');

  }

}
