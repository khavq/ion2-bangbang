import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {Camera} from 'ionic-native';
import {PhotoDetailPage} from '../../pages/photo-detail/photo-detail';
import {GlobalVars} from '../../providers/global-vars/global-vars';
import {BarcodeScanner} from 'ionic-native';

/*
  Generated class for the PhotoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/photo/photo.html'
})
export class PhotoPage {
    // var photoOptions = {
    //     quality: 75,
    //     destinationType: Camera.DestinationType.DATA_URL,
    //     allowEdit: true,
    //     encodingType: Camera.EncodingType.JPEG,
    //     // popoverOptions: Camera.PopoverOptions,
    //     targetHeight: 500,
    //     targetWidth: 500,
    //     saveToPhotoAlbum: false
    // }
    public photoOptions: any;
    constructor(private nav: NavController, public globalVars: GlobalVars) {
    	this.nav = nav;
    	this.photoOptions = {
    		quality: 75,
	        destinationType: Camera.DestinationType.DATA_URL,
	        allowEdit: true,
	        encodingType: Camera.EncodingType.JPEG,
	        // popoverOptions: Camera.PopoverOptions,
	        targetHeight: 500,
	        targetWidth: 500,
	        saveToPhotoAlbum: false
    	};

    	this.globalVars = globalVars;
    }
    takePhoto() {
        console.log("take photo",Camera.PictureSourceType.CAMERA);
        this.photoOptions.sourceType = Camera.PictureSourceType.CAMERA;
        Camera.getPicture(this.photoOptions).then((imageData) => {
		 // imageData is either a base64 encoded string or a file URI
		 // If it's base64:
		 this.globalVars.setImgURI("data:image/jpeg;base64," + imageData);
		 this.nav.push(PhotoDetailPage);
		}, (err) => {
			console.log("take picture ERROR:", err);
		});
    }
    choosePhoto() {
        console.log("choose photo");
        this.photoOptions.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
        Camera.getPicture(this.photoOptions).then((imageData) => {
		 // imageData is either a base64 encoded string or a file URI
		 // If it's base64:
		 this.globalVars.setImgURI("data:image/jpeg;base64," + imageData);
		 this.nav.push(PhotoDetailPage);
		}, (err) => {
			console.log("take picture ERROR:", err);
		});
    }

    barcode() {
        
        var message = "";
        let that = this;
        BarcodeScanner.scan().then((barcodeData) => {
         // Success! Barcode data is here
         // message = barcodeData;
         let prompt = Alert.create({
            message: barcodeData.text,
            buttons: [{text:"OK"}]
         });
        that.nav.present(prompt);
        }, (err) => {
            // An error occurred
            message = err;
            
        });
        
    }
}