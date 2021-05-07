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
        private languageSettings: LanguageSettingsHelper) {
        this.languageList = LANGUAGE_LIST;
        this.selectedLanguage = AppLanguage.Code;

    }



    Login() {
        this.router.navigate(['/home'])
        this.menu.enable(true)
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
