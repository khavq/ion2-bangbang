/// <reference path="../node_modules/angularfire2/firebase3.d.ts"/>
// import 'es6-shim';
import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import * as firebase from 'firebase';
import {GlobalVars} from './providers/global-vars/global-vars';
// import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [GlobalVars]
})
export class MyApp {
  
  private rootPage:any;
  public imgURI: any;
  constructor(private platform:Platform) {
    // this.rootPage = TabsPage;
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBraUpF6f4tA9QuEy2QnO32VQTHccluLvU",
      authDomain: "bangbang-474d4.firebaseapp.com",
      databaseURL: "https://bangbang-474d4.firebaseio.com",
      storageBucket: "bangbang-474d4.appspot.com",
    };
    firebase.initializeApp(config);
    // var CrrUser;
    firebase.auth().onAuthStateChanged( (user) => {
      if ( user ) {
        
        var userId = firebase.auth().currentUser.uid;
        // firebase.database().ref('/userProfile/' + userId).once('value').then(function(snapshot) {
        //   // var name = snapshot.val().name;
        //   CrrUser = {
        //     name: snapshot.val().name,
        //     email: snapshot.val().email,
        //     image: snapshot.val().image
        //   }
        //   // current_user = CrrUser;
        //   // ...
        // });
        
        // if there's a user take him to the home page
        this.rootPage = TabsPage;
        
      } else {

        this.rootPage = LoginPage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp)
