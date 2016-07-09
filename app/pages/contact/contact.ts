import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AuthData } from '../../providers/auth-data/auth-data';
import { LoginPage } from '../../pages/login/login';

@Component({
  templateUrl: 'build/pages/contact/contact.html',
  providers: [AuthData]
})
export class ContactPage {
  
  constructor(private navController: NavController, public authData: AuthData) {
  	this.authData = authData;
  	this.navController = navController;
  }

  logoutUser() {
  	this.authData.logoutUser().then( () => {
  		this.navController.rootNav.setRoot(LoginPage);
  	})
  }
}
