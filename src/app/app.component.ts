import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {  LanguageSettingsHelper } from '../app/helper/language-settings.helper';
import * as _ from 'lodash';


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
          { name: "Home", component: "/home" },
          { name: "PR Approval", component: "/purchase-request-approval" },
          { name: "Purchase Order", component: "/purchase-request-approval" },
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
