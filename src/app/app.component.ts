import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {  LanguageSettingsHelper } from '../app/helper/language-settings.helper';
import * as _ from 'lodash';
//import { PrimeMessageHelper } from './helper/primeMessage.helper';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
    
export class AppComponent {
    public menuItem: any;

  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              private router: Router, 
              private menu: MenuController,
              private navCtrl: NavController,
              private languageSettings: LanguageSettingsHelper) {
      this.menu.enable(false)
      this.languageSettings.SetDefaultAppLanguage();
 
     


      this.menuItem = [
          { name: "Home", component: "/home" , icon: "home-outline" },
          { name: "Genealogy", component: "/genealogy" , icon: "git-network-outline"},
          { name: "Claims", component: "/claims", icon: "card-outline" },
          { name: "Wallet", component: "/purchase-request-approval", icon: "wallet-outline" },
          { name: "Barcode Scanner", component: "/purchase-request-approval", icon: "barcode-outline" },
      ]

      this.initializeApp();



    }



    logout() {
        this.menu.enable(false)
        this.menu.close('appMenu');
        this.router.navigate(['/login'])
    }


    openPage(str) {

       this.menu.close();
   
       this.navCtrl.navigateForward(str);
    }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
