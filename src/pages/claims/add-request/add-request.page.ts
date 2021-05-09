
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { MyRequest } from '../../../app/interfaces/my-request.interface';
import { AppState } from '../../../app/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalHelper } from  '../../../app/helper/swal.helper';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AppLanguage } from '../../../app/helper/language-settings.helper';
import { ADD_REQUEST_LANGUAGE } from '../../../app/languages/my-request.languages';
import { COMMON_LANGUAGE } from '../../../app/languages/common.languages';
import * as _ from 'lodash';
import * as MyRequestActions from '../../../app/actions/my-request.actions';
import { MyRequestActionCreator } from '../../../app/action-creator/my-request.action-creator';
import * as moment from 'moment';

@Component({
  selector: 'app-add-request',
  templateUrl: 'add-request.page.html',
  styleUrls: ['add-request.page.scss']
})
export class AddRequestPage {
    public prDetails: any;
    public appForm: FormGroup;
    public commonLanguage = _.find(COMMON_LANGUAGE, { 'Code': AppLanguage.Code });
    public commonText = this.commonLanguage.Items;
    public pageLanguage = _.find(ADD_REQUEST_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;

    constructor(private myRequestActionCreator: MyRequestActionCreator,private navCtrl: NavController, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder) {

   
        //this.route.queryParams.subscribe(params => {
        //    console.log(params)
        //    if (this.router.getCurrentNavigation().extras.state) {
        //        this.prDetails = this.router.getCurrentNavigation().extras.state.data;
        //    }
        //});

        this.appForm = this.formBuilder.group({
            referenceNumber: ['', Validators.required],
            description: ['', Validators.required],
            site: ['', Validators.required],
        });


    }


    approve() {

            if(this.appForm.status == "VALID" ){
                SwalHelper.InfoConfirm(this.itemLanguage.CreateRequestTitle, '',2)
                        .then((result) => {
                            if (result.value) {
                                SwalHelper.Success(this.itemLanguage.CreateRequestSuccessTitle, '')
                                    .then(() => {
                                        var model = {
                                            ReferenceNumber : this.appForm.value.referenceNumber,
                                            Description : this.appForm.value.description,
                                            Site : this.appForm.value.site,
                                            Date : moment().format('MMM DD, YYYY'),
                                            Status : "Pending"
                                        };

                                        this.myRequestActionCreator.AddMyRequest(model);
                                     
                                        this.navCtrl.pop()
                                    })
                            }
                        })
            }else{
                SwalHelper.FillUpFormPrompt();

            }


    

        console.log(this.appForm)

            console.log(this.appForm.value)

    }
}
