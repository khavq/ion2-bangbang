import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/common';
import { Product } from '../../providers/product/product';
// import {Camera} from 'ionic-native';


/*
  Generated class for the ProductPage page.

  See http://ionicframework.com/docs/v2/components/
  #navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/product/product.html',
  providers: [Product]
})
export class ProductPage {
  public productForm: any;	

  constructor(private nav: NavController, 
  	public formBuilder: FormBuilder, 
  	public proProduct: Product) {
  	this.nav = nav;
  	this.productForm = formBuilder.group( {
  		name: ['', Validators.required],
  		tagline: ['', Validators.required],
  		price: ['', Validators.required],
  		description: ['', Validators.required]
  	});

  	this.proProduct = proProduct;
  }

  createProduct(event) {
  	event.preventDefault();
  	var product = {
  		name: this.productForm.value.name,
  		tagline: this.productForm.value.tagline,
  		price: this.productForm.value.price,
  		description: this.productForm.value.description
  	}

  	this.proProduct.createProduct(product).then( (data) => {
  		console.log("success:", data);
  	}, ( error ) => {
  		console.log( "failed:", error);
  	})
  }

}
