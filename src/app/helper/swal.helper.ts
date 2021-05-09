import Swal from 'sweetalert2'
import { COMMON_LANGUAGE } from '../../app/languages/common.languages';
import { AppLanguage } from '../../app/helper/language-settings.helper';
import * as _ from 'lodash';


export class SwalHelper {




    public static Success(title, text) {

        return Swal.fire({
            title: title,
            text: text,
            icon: 'success',
            backdrop: false,
        })


    }

    public static Warning(title, text) {

        return Swal.fire({
            title: title,
            text: text,
            icon: 'warning',
            backdrop: false,
        })


    }

    public static FillUpFormPrompt() {
        var language = _.find(COMMON_LANGUAGE, { 'Code': AppLanguage.Code });
        let title = language.Items.FillUpPromptTitle;
        let text = language.Items.FillUpPromptText;

        return Swal.fire({
            title: title,
            text: text,
            icon: 'warning',
            backdrop: false,
        })


    }



    public static InfoConfirm(title, text, type) {
        var language = _.find(COMMON_LANGUAGE, { 'Code': AppLanguage.Code });
        let btnConfirm;
        let btnCancel;

        if (type == 1) { //OK-Cancel
            btnConfirm = language.Items.BtnConfirm1
            btnCancel = language.Items.BtnCancel1
        } else if (type == 2){ //Yes-No
            btnConfirm = language.Items.BtnConfirm2
            btnCancel = language.Items.BtnCancel2
        }


        return  Swal.fire({
            title: title,
            text: text,
            icon: 'info',
            backdrop:false,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: btnConfirm,
            cancelButtonText: btnCancel,
        })


    }



}
