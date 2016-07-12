import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalVars provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalVars {
  public imgURI: any;
  constructor() {
    this.imgURI = "http://masterherald.com/wp-content/uploads/2015/01/iron-man.jpeg";
  }

  setImgURI(value): any {
    this.imgURI = value;
  }

  getImgURI() {
    return this.imgURI;
  }
}

