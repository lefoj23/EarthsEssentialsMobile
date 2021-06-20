
import { Component, OnInit, ViewChild , ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  NavigationExtras } from '@angular/router';
import {
    PURCHASE_REQUEST
} from '../../app/constants/purchase-request.constants';
import { AppLanguage } from '../../app/helper/language-settings.helper';
import { GENEALOGY_LANGUAGE } from '../../app/languages/genealogy.languages';
import { SwalHelper } from '../../app/helper/swal.helper';
import { FormBuilder, FormGroup, Validators, FormArray,FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { MyRequestActionCreator } from '../../app/action-creator/my-request.action-creator';
import { MyRequest } from 'src/app/interfaces/my-request.interface';

import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { PrimeToastHelper } from '../../app/helper/primeToast.helper';
import { GenealogyActionCreator } from '../../app/action-creator/genealogy.action-creator';
import { UserDetails } from '../../app/interfaces/user-details.interface' 
import { Binary } from '../../app/interfaces/binary.interface' 

@Component({
  selector: 'app-genealogy',
  templateUrl: 'genealogy.page.html',
  styleUrls: ['genealogy.page.scss']
})
export class GenealogyPage implements OnInit, AfterViewInit {
    public appForm: FormGroup;
    public userDetails:UserDetails;
    public pageLanguage = _.find(GENEALOGY_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;
    public selectedItem :any = [];
    

    data1: TreeNode[];
    isGraphLoaded:boolean = false;
    binary:any;
    currentBinaryUserId:any;
    prevBinaryUserId:any;
    //@ViewChild('ionContent') ionContent: ElementRef;
    //@ViewChild('genealogyDiv') genealogyDiv: ElementRef;

    constructor(private navCtrl: NavController,
                private genealogyActionCreator: GenealogyActionCreator,
                public formBuilder: FormBuilder,
                public primeToastHelper: PrimeToastHelper) {
                    this.userDetails = localStorage.getItem('userDetails') != null ? JSON.parse(localStorage.getItem('userDetails')) : null;
                    this.currentBinaryUserId = this.userDetails.uniqueId;
                    this.genealogyActionCreator.GetBinary(this.currentBinaryUserId);
         
                }


    ngOnInit() {
      

        // this.data1 = [{
        //     label: 'CEO',
        //     type: 'person',
        //     styleClass: 'p-person',
        //     expanded: true,
        //     data: { name: 'Walter White', 'avatar': '../assets/avatar/avatar1.png' },
        //     children: [
        //         {
        //             label: 'CFO',
        //             type: 'person',
        //             styleClass: 'p-person',
        //             expanded: true,
        //             data: { name: 'Saul Goodman', 'avatar': '../assets/avatar/avatar2.png'  },
        //             children: [{
        //                 label: 'Tax',
        //                 styleClass: 'department-cfo'
        //             },
        //             {
        //                 label: 'Legal',
        //                 styleClass: 'department-cfo'
        //             }],
        //         },
        //         {
        //             label: 'COO',
        //             type: 'person',
        //             styleClass: 'p-person',
        //             expanded: true,
        //             data: { name: 'Mike E.', 'avatar': '../assets/avatar/avatar3.png'  },
        //             children: [{
        //                 label: 'Operations',
        //                 styleClass: 'department-coo'
        //             }]
        //         },
        //         {
        //             label: 'CTO',
        //             type: 'person',
        //             styleClass: 'p-person',
        //             expanded: true,
        //             data: { name: 'Jesse Pinkman', 'avatar': '../assets/avatar/avatar4.png'  },
        //             children: [{
        //                 label: 'Development',
        //                 styleClass: 'department-cto',
        //                 expanded: true,
        //                 children: [{
        //                     label: 'Analysis',
        //                     styleClass: 'department-cto'
        //                 },
        //                 {
        //                     label: 'Front End',
        //                     styleClass: 'department-cto'
        //                 },
        //                 {
        //                     label: 'Back End',
        //                     styleClass: 'department-cto'
        //                 }]
        //             },
        //             {
        //                 label: 'QA',
        //                 styleClass: 'department-cto'
        //             },
        //             {
        //                 label: 'R&D',
        //                 styleClass: 'department-cto'
        //             }]
        //         }
        //     ]
        // }];

     
    }
    
    ngAfterViewInit() {
        // document.querySelector('.genealogyDiv').scrollLeft
        //this.primeToastHelper.SuccessTopCenter();
        console.log("gg")

    }


    ngDoCheck() {
        this.binary = this.genealogyActionCreator.binary;
        console.log(this.binary)
        if (this.binary && !this.isGraphLoaded){
            this.populateGraph(this.binary);

        }
          
    }


    populateGraph(binary){
        console.log(binary)
        console.log(binary.children)
        this.isGraphLoaded = true;
    }

    getBinary(userId){
        this.genealogyActionCreator.GetBinary(userId);

        this.isGraphLoaded = false;
        this.binary = null;
        this.prevBinaryUserId = this.currentBinaryUserId;
        this.currentBinaryUserId = userId;
        this.ngDoCheck();
        //this.binary = this.genealogyActionCreator.binary;

       //this.populateGraph(this.binary)
    

    }


    goBack(){
        this.getBinary(this.prevBinaryUserId);

    }
    // onNodeSelect(event) {
    //    // this.primeToastHelper.SuccessTopCenter()
    //    // this.primeToastHelper.SuccessTopCenter();
    //     //this.primeToastHelper.SuccessSticky()

    //     this.selectedItem = event.node;
    //     console.log(event)
    //     //this.messageService.add({ severity: 'success', summary: 'Node Selected', detail: event.node.label });
    // }
}
