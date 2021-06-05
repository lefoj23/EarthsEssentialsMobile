import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LOGIN_LANGUAGE } from '../../app/languages/login.languages';
import { COMMON_LANGUAGE } from '../../app/languages/common.languages';
import { LANGUAGE_LIST } from '../../app/constants/langauge-list.constants';
import { AppLanguage, LanguageSettingsHelper } from '../../app/helper/language-settings.helper';
import { SwalHelper } from '../../app/helper/swal.helper';
import { LoadingController } from '@ionic/angular';
import * as _ from 'lodash';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

    public languageList: any;
    public selectedLanguage: any;
    public pageLanguage = _.find(LOGIN_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;

    constructor(private router: Router,
        private menu: MenuController,
        private loadingController: LoadingController,
        private androidFingerprintAuth: AndroidFingerprintAuth,
        private languageSettings: LanguageSettingsHelper) {
        this.languageList = LANGUAGE_LIST;
        this.selectedLanguage = AppLanguage.Code;

 }



    Login() {
        this.router.navigate(['/home'])
        this.menu.enable(true)
    }

    fingerprintLogin(){

              
        this.androidFingerprintAuth.isAvailable()
        .then((result)=> {
          if(result.isAvailable){
            // it is available

            this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
              .then(result => {
                if (result.withFingerprint) {
                    // console.log('Successfully encrypted credentials.');
                    // console.log('Encrypted credentials: ' + result.token);
                    this.router.navigate(['/home'])
                    this.menu.enable(true)
                } else if (result.withBackup) {
                  console.log('Successfully authenticated with backup password!');
                } else console.log('Didn\'t authenticate!');
              })
              .catch(error => {
                if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                  console.log('Fingerprint authentication cancelled');
                } else console.error(error)
              });

          } else {
            // fingerprint auth isn't available
          }
        })
        .catch(error => console.error(error));




    }



    async changeLanguage(code) {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 2000
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
    

        this.languageSettings.ChangeLanguage(code);
        this.pageLanguage = _.find(LOGIN_LANGUAGE, { 'Code': AppLanguage.Code });
        this.itemLanguage = this.pageLanguage.Items;
    }

  
}
