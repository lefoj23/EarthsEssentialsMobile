import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,MenuController } from '@ionic/angular';

//import { LOGIN_LANGUAGE } from '../../app/languages/profile.languages';
import { COMMON_LANGUAGE } from '../../app/languages/common.languages';
import { LANGUAGE_LIST } from '../../app/constants/langauge-list.constants';
import { AppLanguage, LanguageSettingsHelper } from '../../app/helper/language-settings.helper';
import { SwalHelper } from '../../app/helper/swal.helper';
import { LoadingController } from '@ionic/angular';
import * as _ from 'lodash';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { UserDetails } from '../../app/interfaces/user-details.interface' 


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

    public languageList: any;
    public selectedLanguage: any;
    public userDetails:UserDetails;
   //public pageLanguage = _.find(LOGIN_LANGUAGE, { 'Code': AppLanguage.Code });
    //public itemLanguage = this.pageLanguage.Items;

    constructor(private router: Router,
        private menu: MenuController,
        private loadingController: LoadingController,
        private androidFingerprintAuth: AndroidFingerprintAuth,
        private languageSettings: LanguageSettingsHelper) {
        this.languageList = LANGUAGE_LIST;
        this.selectedLanguage = AppLanguage.Code;

        this.userDetails = localStorage.getItem('userDetails') != null ? JSON.parse(localStorage.getItem('userDetails')) : null
     
 }


    
 openMenu() {
  this.menu.close();
  this.menu.enable(true, 'appMenu');
  this.menu.open('appMenu');

}



  
}
