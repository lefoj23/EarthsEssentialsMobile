
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  NavigationExtras } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Store } from '@ngrx/store';
// import {
//     MY_REQUEST
// } from '../../app/constants/my-request.constants';
import { AppLanguage } from '../../app/helper/language-settings.helper';
import { MY_REQUEST_LANGUAGE } from '../../app/languages/my-request.languages';
import { SwalHelper } from '../../app/helper/swal.helper';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import * as _ from 'lodash';
import { MyRequest } from '../../app/interfaces/my-request.interface';
import { AppState } from '../../app/app.state';
import { MyRequestActionCreator } from '../../app/action-creator/my-request.action-creator';


@Component({
  selector: 'app-my-request',
  templateUrl: 'my-request.page.html',
  styleUrls: ['my-request.page.scss']
})
export class MyRequestPage {
    public item: any;
    public appForm: FormGroup;
    public pageLanguage = _.find(MY_REQUEST_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;
    

    constructor(private myRequestActionCreator: MyRequestActionCreator,private navCtrl: NavController,
        public formBuilder: FormBuilder) {

        this.myRequestActionCreator.GetMyRequest().subscribe(
                Success  => {
                    this.item = Success
           
                }
            );

        this.appForm = this.formBuilder.group({
            selectedIdList: this.createItemList()
        });


    }



    createItemList() {
        // const arr = this.item.map(item => {
        //     return this.formBuilder.control(item.isSelected);
        // });
        // return this.formBuilder.array(arr);
    }
    selectItem(data) {




    }


    seeDetails(data) {

        

        let navigationExtras: NavigationExtras = {
            state: {
                data: data
            }
        };

    
  
       // this.navCtrl.navigateForward(["/purchase-request-details"], navigationExtras);
      //  this.navCtrl.navigateForward(["/purchase-request-details" ,data]);


    }


    addRequest() {
        this.navCtrl.navigateForward(["my-request/add-request"]);


    }


}
