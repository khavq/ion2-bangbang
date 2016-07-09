import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {ProductPage} from '../product/product';
import {PhotoPage} from '../photo/photo';
import {PhotoDetailPage} from '../photo-detail/photo-detail';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;
  private tab5Root: any;
  private tab6Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
    this.tab4Root = ProductPage;
    this.tab5Root = PhotoPage;
    this.tab6Root = PhotoDetailPage;
  }
}
