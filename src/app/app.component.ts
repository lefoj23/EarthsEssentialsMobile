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
import { UserDetails } from '../app/interfaces/user-details.interface' 
import { AccountsService } from '../app/api-services/accounts.service';
import { AccountsActionCreator } from '../app/action-creator/accounts.action-creator';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
    
export class AppComponent {
    public menuItem: any;
    public userDetails:UserDetails;
    public isLogOutClicked: boolean =false;
  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              private router: Router, 
              private menu: MenuController,
              private navCtrl: NavController,
              private accountsService:AccountsService,
              private accountsActionCreator: AccountsActionCreator,
              private languageSettings: LanguageSettingsHelper) {
      this.menu.enable(false)
      this.languageSettings.SetDefaultAppLanguage();
 
     
            
      this.menuItem = [
          { name: "Home", component: "/home" , icon: "home-outline" },
          { name: "Genealogy", component: "/genealogy" , icon: "git-network-outline"},
          { name: "Claims", component: "/claims", icon: "card-outline" },
          { name: "Wallet", component: "/purchase-request-approval", icon: "wallet-outline" },
          { name: "Barcode Scanner", component: "/barcode-scanner", icon: "barcode-outline" },
      ]

      this.initializeApp(); 
      this.accountsActionCreator.GetUserSession();

    //  this.userDetails = localStorage.getItem('userDetails') != null ? JSON.parse(localStorage.getItem('userDetails')) : null

      //  this.accountsService.GetUserSession().subscribe(resp => {
      //     console.log(resp)
      //   this.userDetails = resp;
      //  })

      this.userDetails = this.accountsActionCreator.userDetails;

    }

    closeMenu(){
      this.menu.close('appMenu');

    }

    logout() {
      if(!this.isLogOutClicked){
        this.accountsActionCreator.SignOut();

      }

        //this.menu.enable(false)
        //this.menu.close('appMenu');

        //this.router.navigate(['/login'])
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
