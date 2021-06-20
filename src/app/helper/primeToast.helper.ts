import { COMMON_LANGUAGE } from '../../app/languages/common.languages';
import { AppLanguage } from '../../app/helper/language-settings.helper';
import * as _ from 'lodash';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
     
        ToastModule,
  
    ],
})

export class PrimeToastHelper{
   //public _messageService: MessageService;
    public duration = 1500;
    constructor(public messageService: MessageService) {}

    public SuccessTopCenter(title,text) {
        this.messageService.add({ key: 'tc', severity: 'success', life:this.duration, summary: title, detail: text,closable:false })
     
    }

    public SuccessTopCenterCallback(title,text) {
        const parent = this;
        
        //const messageService = this.messageService ;

        return new Promise(function(resolve, reject){
        parent.messageService.add({ key: 'tc', severity: 'success', life:parent.duration, summary: title, detail: text,closable:false })

            setTimeout(() => resolve(  parent.messageService.clear()), parent.duration)
            //resolve( true);
           // messageService.add({ key: 'tc', severity: 'success', summary: title, detail: text,closable:false })

        })
    }

   
    public SuccessSticky(title,text) {
        this.messageService.add({ key: 'tc', severity: 'info', life:this.duration, summary: 'Sticky', detail: 'Message Content', sticky: true ,closable:false });
    }

    public WarningTopCenter(title,text) {
        this.messageService.add({ key: 'tc', severity: 'warn', life:this.duration, summary: title, detail: text,closable:false });
    }

    public ErrorTopCenter(title,text) {
        this.messageService.add({ key: 'tc', severity: 'error', life:this.duration, summary: title, detail: text,closable:false });
    }

    //public static Success(title, text) {

    //    return Swal.fire({
    //        title: title,
    //        text: text,
    //        icon: 'success',
    //        backdrop: false,
    //    })


    //}

    //public static Warning(title, text) {

    //    return Swal.fire({
    //        title: title,
    //        text: text,
    //        icon: 'warning',
    //        backdrop: false,
    //    })


    //}

    //public static FillUpFormPrompt() {
    //    var language = _.find(COMMON_LANGUAGE, { 'Code': AppLanguage.Code });
    //    let title = language.Items.FillUpPromptTitle;
    //    let text = language.Items.FillUpPromptText;

    //    return Swal.fire({
    //        title: title,
    //        text: text,
    //        icon: 'warning',
    //        backdrop: false,
    //    })


    //}



    //public static InfoConfirm(title, text, type) {
    //    var language = _.find(COMMON_LANGUAGE, { 'Code': AppLanguage.Code });
    //    let btnConfirm;
    //    let btnCancel;

    //    if (type == 1) { //OK-Cancel
    //        btnConfirm = language.Items.BtnConfirm1
    //        btnCancel = language.Items.BtnCancel1
    //    } else if (type == 2){ //Yes-No
    //        btnConfirm = language.Items.BtnConfirm2
    //        btnCancel = language.Items.BtnCancel2
    //    }


    //    return  Swal.fire({
    //        title: title,
    //        text: text,
    //        icon: 'info',
    //        backdrop:false,
    //        showCancelButton: true,
    //        confirmButtonColor: '#3085d6',
    //        cancelButtonColor: '#d33',
    //        confirmButtonText: btnConfirm,
    //        cancelButtonText: btnCancel,
    //    })


    //}



}
