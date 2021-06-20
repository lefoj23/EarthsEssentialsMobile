import { Component, OnInit,Renderer2, Input,ViewChild} from '@angular/core';  
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { NavController,MenuController } from '@ionic/angular';

import { AppLanguage } from '../../app/helper/language-settings.helper';
import { HOME_LANGUAGE } from '../../app/languages/home.languages';
import { COMMON_LANGUAGE } from '../../app/languages/common.languages';
import * as _ from 'lodash';
import * as moment from 'moment';
import { UserDetails } from '../../app/interfaces/user-details.interface' 
import { HomeActionCreator } from '../../app/action-creator/home.action-creator';


//import { HeaderNav } from '../../app/header-nav/header-nav.component';

//import { trigger, state, transition, style, animate } from '@angular/animations';  


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
//   animations:[ 
//     trigger('fade',
//         [ 
//         state('void', style({ opacity : 0})),
//         transition(':enter',[ animate(300)]),
//         transition(':leave',[ animate(500)]),
//         ]
//     )]
})
export class HomePage implements OnInit{
   //@ViewChild('headerNav') headerNav;
    @Input('header') header: any;
    public lastX:any;
    public userDetails:UserDetails;
    public pageLanguage = _.find(HOME_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;
    //public headerText: any;

    public clock: any;

    // PIE CHART
    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'top',
        },
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    const label = ctx.chart.data.labels[ctx.dataIndex];
                    return label;
                },
            },
        }
    };
    public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [pluginDataLabels];
    public pieChartColors;



    //BAR CHART
    public barChartOptions: ChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    public barChartLabels: Label[] = ['2006', '2007', '2008', '2009'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];

    public barChartData: ChartDataSets[] = [
        { data: [65, 59, 80, 81], label: 'Series A' },
        { data: [28, 48, 40, 19], label: 'Series B' }
    ];

    public barChartColors;

    constructor(private navCtrl: NavController,
        private homeActionCreator: HomeActionCreator,
        private menu: MenuController,
        private renderer: Renderer2, ) {
        this.setClock();

        this.userDetails = localStorage.getItem('userDetails') != null ? JSON.parse(localStorage.getItem('userDetails')) : null

            console.log(this.userDetails )
        //this.headerText = `${this.itemLanguage.Greetings} ${this.firstName} ${this.lastName}`;


        let primaryRGB = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-rgb');
        let secondaryRGB = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary-rgb');
        let tertiaryRGB = getComputedStyle(document.documentElement).getPropertyValue('--color-tertiary-rgb');
        let tertiary2RGB = getComputedStyle(document.documentElement).getPropertyValue('--color-tertiary2-rgb');

        this.pieChartColors = [
            {
                backgroundColor: [`rgba(${primaryRGB},0.7)`, `rgba(${secondaryRGB},0.7)`, `rgba(${tertiaryRGB},0.7)`]
            },
        ];

        this.barChartColors = [
            {
                backgroundColor: [`rgba(${primaryRGB},0.7)`, `rgba(${secondaryRGB},0.7)`, `rgba(${tertiaryRGB},0.7)`, `rgba(${tertiary2RGB},0.7)`],
            },
            {
                backgroundColor: [`rgba(${primaryRGB},0.7)`, `rgba(${secondaryRGB},0.7)`, `rgba(${tertiaryRGB},0.7)`, `rgba(${tertiary2RGB},0.7)`],
            },
        ];
        
        this.homeActionCreator.GetDashboardData();

    }

    ngOnInit() {  }
    // ngAfterViewInit() {
     
      
    //   }
    
    openMenu() {
        this.menu.close();
        this.menu.enable(true, 'appMenu');
        this.menu.open('appMenu');

    }

    //@HostListener('window:scroll', ['$event'])
    onWindowScroll(ev) {
        
    //console.log(this.header)
    //      console.log(ev)

    //let element = document.getElementById('headerNav');
    
    if(ev.detail.currentY > 175){
   
       // if(ev.detail.scrollTop > Math.max(0,this.lastX)){
            //console.log("HIDE HeADER")
            //this.renderer.setStyle(this.header,'margin-top',`-${this.header.clientHeight}px`)
            // this.renderer.removeClass(this.header,"show");
            
            // this.renderer.addClass(this.header,"hidden");
            // this.renderer.setStyle(this.header,'transition','margin-top 600ms')
           
            this.renderer.setStyle(this.header,'height',`0px`)
      
            this.renderer.setStyle(this.header,'transition','height 600ms')

      
        }else{
            // this.renderer.setStyle(this.header,'margin-top','0px')
            // this.renderer.setStyle(this.header,'transition','margin-top 600ms')
          
            // this.renderer.addClass(this.header,"show");
            // this.renderer.removeClass(this.header,"hidden");

            
            // console.log("SHOW HeADER")
            this.renderer.setStyle(this.header,'height','300px')

          
            this.renderer.setStyle(this.header,'transition','height 600ms')

        }

     // this.lastX  = ev.detail.scrollTop ;
      


      // if (window.pageYOffset > 550) {
    // if(e.detail.currentY > 200){
    //      let element = document.getElementById('homeHeader');
    //      element.classList.add('sticky');
    //      console.log("gg")
    //    } else {
    //     let element = document.getElementById('homeHeader');
    //       element.classList.remove('sticky'); 
    //       console.log("gyyg")
    //    }


    }

    scrollStart(header){
      
     
     // console.log(this.headerNav)
   
      
      console.log(header)
       this.header = header.el.children[1];

    }
  
  
    openPage(str) {
        
        this.navCtrl.navigateForward("/" + str);

    }

    setClock() {
        setInterval(() => {
            this.clock = moment().format('MMM DD, YYYY hh:mm:ss a');
        },1000)
    }



}
