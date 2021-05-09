
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  NavigationExtras } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Store } from '@ngrx/store';
// import {
//     CLAIMS
// } from '../../app/constants/claims.constants';
import { AppLanguage } from '../../app/helper/language-settings.helper';
import { CLAIMS_LANGUAGE } from '../../app/languages/claims.languages';
import { SwalHelper } from '../../app/helper/swal.helper';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import * as _ from 'lodash';
import { Claims } from '../../app/interfaces/claims.interface';
import { AppState } from '../../app/app.state';
import { ClaimsActionCreator } from '../../app/action-creator/claims.action-creator';


@Component({
  selector: 'app-claims',
  templateUrl: 'claims.page.html',
  styleUrls: ['claims.page.scss']
})
export class ClaimsPage {
    public item: any;
    public appForm: FormGroup;
    public pageLanguage = _.find(CLAIMS_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;
    

    constructor(private ClaimsActionCreator: ClaimsActionCreator,private navCtrl: NavController,
        public formBuilder: FormBuilder) {

        this.ClaimsActionCreator.GetClaims().subscribe(
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


    //addRequest() {
    //   // this.navCtrl.navigateForward(["claims/add-request"]);


    //}


}
