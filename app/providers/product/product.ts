import { Injectable } from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the Product provider.

  See https://angular.io/docs/ts/latest/guide/
  dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Product {
  data: any;
  public products: any;
  constructor(private http: Http, public nav: NavController) {
    this.nav = nav;
    this.data = null;
    this.products = firebase.database().ref().child('products');
  }

  
  getAllProducts(): any {
    var that = this
    console.log("that", that);

    return new Observable(observer => {
        that.products.orderByChild("updated_at").limitToLast(3).on('value',
            (snapshot) => {
                var arr = []

                snapshot.forEach(function(childSnapshot) {
                    arr.push({
                        id: childSnapshot.key,
                        data: childSnapshot.val()
                    });
                });
                observer.next(arr);
                // sorting DESC
                arr.reverse();
            },
            (error) => {
                console.log("ERROR:", error)
                observer.error(error)
            });
    });
  }

  createProduct( product: any ): any {
    return this.products.push( product ).then( (data) => {
      console.log("add to database success:", data);
    }, ( error ) => {
      var errorMessage: string = error.message;
      let prompt = Alert.create( {
        message: errorMessage,
        buttons: [{ text: 'OK'}]
      });
      this.nav.present(prompt);
    })
  }

  
}

