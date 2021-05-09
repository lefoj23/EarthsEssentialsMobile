
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

@Component({
  selector: 'app-genealogy',
  templateUrl: 'genealogy.page.html',
  styleUrls: ['genealogy.page.scss']
})
export class GenealogyPage implements OnInit, AfterViewInit {
    public appForm: FormGroup;
    public pageLanguage = _.find(GENEALOGY_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;
    public selectedItem :any = [];

    data1: TreeNode[];
    //@ViewChild('ionContent') ionContent: ElementRef;
    //@ViewChild('genealogyDiv') genealogyDiv: ElementRef;

    constructor(private navCtrl: NavController,
                public formBuilder: FormBuilder,
                public primeToastHelper: PrimeToastHelper) { }


    ngOnInit() {
        this.data1 = [{
            label: 'CEO',
            type: 'person',
            styleClass: 'p-person',
            expanded: true,
            data: { name: 'Walter White', 'avatar': '../assets/avatar/avatar1.png' },
            children: [
                {
                    label: 'CFO',
                    type: 'person',
                    styleClass: 'p-person',
                    expanded: true,
                    data: { name: 'Saul Goodman', 'avatar': '../assets/avatar/avatar2.png'  },
                    children: [{
                        label: 'Tax',
                        styleClass: 'department-cfo'
                    },
                    {
                        label: 'Legal',
                        styleClass: 'department-cfo'
                    }],
                },
                {
                    label: 'COO',
                    type: 'person',
                    styleClass: 'p-person',
                    expanded: true,
                    data: { name: 'Mike E.', 'avatar': '../assets/avatar/avatar3.png'  },
                    children: [{
                        label: 'Operations',
                        styleClass: 'department-coo'
                    }]
                },
                {
                    label: 'CTO',
                    type: 'person',
                    styleClass: 'p-person',
                    expanded: true,
                    data: { name: 'Jesse Pinkman', 'avatar': '../assets/avatar/avatar4.png'  },
                    children: [{
                        label: 'Development',
                        styleClass: 'department-cto',
                        expanded: true,
                        children: [{
                            label: 'Analysis',
                            styleClass: 'department-cto'
                        },
                        {
                            label: 'Front End',
                            styleClass: 'department-cto'
                        },
                        {
                            label: 'Back End',
                            styleClass: 'department-cto'
                        }]
                    },
                    {
                        label: 'QA',
                        styleClass: 'department-cto'
                    },
                    {
                        label: 'R&D',
                        styleClass: 'department-cto'
                    }]
                }
            ]
        }];

        //var elem = this.ionContent.nativeElement;
        //var middleOffset = this.genealogyDiv.nativeElement.offsetTop;
        //elem.scrollTop = middleOffset - (elem.offsetHeight / 2);
       // console.log(this.genealogyDiv.width())
        //this.ionContent.scrollLeft((this.genealogyDiv.width() - this.ionContent.width()) / 2);   
       
    }
    ngAfterViewInit() {
        // document.querySelector('.genealogyDiv').scrollLeft
        //this.primeToastHelper.SuccessTopCenter();
        console.log("gg")

    }

    onNodeSelect(event) {
       // this.primeToastHelper.SuccessTopCenter()
       // this.primeToastHelper.SuccessTopCenter();
        //this.primeToastHelper.SuccessSticky()

        this.selectedItem = event.node;
        console.log(event)
        //this.messageService.add({ severity: 'success', summary: 'Node Selected', detail: event.node.label });
    }
}
