import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GlobalVars} from '../../providers/global-vars/global-vars';
import {FormBuilder,Validators} from '@angular/common';
import {Product} from '../../providers/product/product';
import * as firebase from 'firebase';
/*
  Generated class for the PhotoDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/photo-detail/photo-detail.html',
    providers: [Product]
})
export class PhotoDetailPage {
	// let self = this;
    public imgURI: any;
    public productForm: any;
    public current_user: any;
    constructor(private nav: NavController, 
    	public globalVars: GlobalVars, 
    	public Products: Product, 
    	public formBuilder: FormBuilder) {

        this.Products = Products;
        this.productForm = formBuilder.group({
            name: ['', Validators.required],
            tagline: ['', Validators.required],
            price: ['', Validators.required],
            description: ['', Validators.required]
        });
        this.globalVars = globalVars;
        this.imgURI = this.globalVars.getImgURI();
        this.nav = nav;
        // let self = this;
    }
    createProduct(event) {
        event.preventDefault();
        let self = this;
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/userProfile/' + userId).once('value').then(function(snapshot) {
        	var product = {
                seller_id: userId,
                seller_name: snapshot.val().name,
                seller_image: snapshot.val().image,
                seller_email: snapshot.val().email,
                name: self.productForm.value.name,
                tagline: self.productForm.value.tagline,
                price: self.productForm.value.price,
                description: self.productForm.value.description,
                image: self.imgURI
            };
            self.Products.createProduct(product).then((data) => {
                    console.log("success:", data);
                }, (error) => {
                    console.log("failed:", error);
                })    
        
        });
        
        // var current_user = this.authData.getCurrentUser();
        // console.log("current_user:", current_user);
    }
}