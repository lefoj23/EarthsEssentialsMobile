
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  NavigationExtras } from '@angular/router';
import {
    PURCHASE_REQUEST
} from '../../app/constants/purchase-request.constants';
import { AppLanguage } from '../../app/helper/language-settings.helper';
import { PR_APPROVAL_LANGUAGE } from '../../app/languages/purchase-request-approval.languages';
import { SwalHelper } from '../../app/helper/swal.helper';
import { FormBuilder, FormGroup, Validators, FormArray,FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { MyRequestActionCreator } from '../../app/action-creator/my-request.action-creator';
import { MyRequest } from 'src/app/interfaces/my-request.interface';



@Component({
  selector: 'app-purchase-request-approval',
  templateUrl: 'purchase-request-approval.page.html',
  styleUrls: ['purchase-request-approval.page.scss']
})
export class PurchaseRequestApprovalPage {
    public item:MyRequest[];
    public appForm: FormGroup;
    public pageLanguage = _.find(PR_APPROVAL_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;
    public selectedItem :any = [];

    constructor(private myRequestActionCreator: MyRequestActionCreator,private navCtrl: NavController,
        public formBuilder: FormBuilder,) {
       // this.item = PURCHASE_REQUEST

       this.myRequestActionCreator.GetMyRequest().subscribe(
        Success  => {
           this.item = _.filter(Success, { 'Status': 'Pending' })
        
          // this.item = Success
            }
        );
 

        this.appForm = this.formBuilder.group({
            selectedIdList:  new FormArray([]),
          //  selectedIdList: this.createItemList(),
        });


    }



    createItemList() {
        const arr = this.item.map(item => {
            // if(item.IsSelected){
            //     return this.formBuilder.control(item.ReferenceNumber);
            // }
           
            return this.formBuilder.control(item.ReferenceNumber);
        });

     //  this.formBuilder.control(arr);

    
        return this.formBuilder.array(arr);
    }

    
    selectItem(event) {

        let evTarget = event.target;
  
        const formArray: FormArray = this.appForm.get('selectedIdList') as FormArray;
        /* Selected */
        if(evTarget.checked){
          // Add a new control in the arrayForm
         // formArray.push(new FormControl(event.target.value));
         formArray.push(new FormControl(evTarget.dataset.item));


        }
        /* unselected */
        else{
          // find the unselected element
          let i: number = 0;
      
          formArray.controls.forEach((ctrl: FormControl) => {
            if(ctrl.value == evTarget.dataset.item) {
              // Remove the unselected element from the arrayForm
              formArray.removeAt(i);
              return;
            }
      
            i++;
          });
        }



    }


    seeDetails(data) {

   

        let navigationExtras: NavigationExtras = {
            state: {
                data: data
            }
        };

       
  
        this.navCtrl.navigateForward(["purchase-request-approval/purchase-request-details"], navigationExtras);
      //  this.navCtrl.navigateForward(["/purchase-request-details" ,data]);


    }


    approve() {
        let itemlanguage = this.itemLanguage;
        let appForm = this.appForm.value;
        
        SwalHelper.InfoConfirm(itemlanguage.ApproveConfirmationTitle, `${ appForm.selectedIdList.length} ` + itemlanguage.ApproveConfirmationText,2)
            .then((result) => {
            if (result.value) {

                    appForm.selectedIdList.forEach( ReferenceNumber =>{
 
                        this.myRequestActionCreator.EditMyRequest(ReferenceNumber);

                    })

                SwalHelper.Success(itemlanguage.ApproveSuccessPromptTitle, `${ appForm.selectedIdList.length} ` + itemlanguage.ApproveSuccessPromptText)
                .then(() => {
                  
                    this.appForm = this.formBuilder.group({
                        selectedIdList:  new FormArray([]),
                    });
                    //this.navCtrl.pop()
                })
            }
        })



    }


}
