import * as _ from 'lodash';
import { LANGUAGE_LIST } from '../../app/constants/langauge-list.constants';


export var AppLanguage: any;

export class LanguageSettingsHelper {



    public SetDefaultAppLanguage() {

      if (localStorage.getItem("appLanguage") == null) {
            localStorage.setItem('appLanguage', JSON.stringify(_.find(LANGUAGE_LIST, { 'Code': 'EN' })));
        } else {
            let storage = JSON.parse(localStorage.getItem("appLanguage"));
            if (storage.Code == null) {
                localStorage.setItem('appLanguage', JSON.stringify(_.find(LANGUAGE_LIST, { 'Code': 'EN' })));
            }
        }


        let appLanguage = JSON.parse(localStorage.getItem("appLanguage"));
        AppLanguage =  appLanguage

    }


    public ChangeLanguage(languageCode) {

        let language = _.find(LANGUAGE_LIST, { 'Code': languageCode })

        localStorage.setItem('appLanguage', JSON.stringify(language));

        let appLanguage = JSON.parse(localStorage.getItem("appLanguage"));
        AppLanguage = appLanguage;


    }



}
