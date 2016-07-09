import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/common';
import { AuthData } from '../../providers/auth-data/auth-data';
import { LoginPage } from '../login/login';

/*
  Generated class for the ResetPasswordPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/reset-password/reset-password.html',
  providers: [AuthData]
})
export class ResetPasswordPage {
  
  public resetPasswordForm: any;

  constructor(public authData: AuthData, public formBuilder: FormBuilder, private nav: NavController) {
  	this.authData = authData;

  	this.resetPasswordForm = formBuilder.group( {
  		email: ['', Validators.required]
  	} )
  }

  resetPassword( event ) {
  	event.preventDefault();
  	this.authData.resetPassword(this.resetPasswordForm.value.email);
  	let loading = Loading.create( { 
  		dismissOnPageChange: true,
  	})

  }

}
