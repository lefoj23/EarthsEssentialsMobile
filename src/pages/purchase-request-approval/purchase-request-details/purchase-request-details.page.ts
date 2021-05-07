
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { SwalHelper } from  '../../../app/helper/swal.helper';
import { PR_DETAILS_LANGUAGE } from '../../../app/languages/purchase-request-approval.languages';
import { AppLanguage } from '../../../app/helper/language-settings.helper';
import { MyRequestActionCreator } from '../../../app/action-creator/my-request.action-creator';
import * as _ from 'lodash';


@Component({
  selector: 'app-purchase-request-details',
  templateUrl: 'purchase-request-details.page.html',
  styleUrls: ['purchase-request-details.page.scss']
})
export class PurchaseRequestDetailsPage {
    public prDetails: any;
    public pageLanguage = _.find(PR_DETAILS_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;

    constructor(private myRequestActionCreator: MyRequestActionCreator,private navCtrl: NavController, private route: ActivatedRoute, private router: Router) {

        this.route.queryParams.subscribe(params => {
         
            if (this.router.getCurrentNavigation().extras.state) {
                this.prDetails = this.router.getCurrentNavigation().extras.state.data;
            }
        });


    }


    approve() {
        let itemlanguage = this.itemLanguage;

        SwalHelper.InfoConfirm(itemlanguage.ApproveConfirmationTitle,'',2)
            .then((result) => {
            if (result.value) {
                this.myRequestActionCreator.EditMyRequest(this.prDetails.ReferenceNumber);

                
                SwalHelper.Success(itemlanguage.ApproveSuccessPromptTitle,'')
                .then(() => {
                  
                    this.navCtrl.pop()
                })
            }
        })

        // SwalHelper.InfoConfirm('Approve this request?', '',2)
        //     .then((result) => {
        //         if (result.value) {
        //             SwalHelper.Success('Successfully Approved!', 'Purchase request successfully approved!')
        //                 .then(() => {
        //                     this.navCtrl.pop()
        //                 })
        //         }
        //     })



    }
}
