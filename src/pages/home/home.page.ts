import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { NavController } from '@ionic/angular';
import { AppLanguage } from '../../app/helper/language-settings.helper';
import { HOME_LANGUAGE } from '../../app/languages/home.languages';
import { COMMON_LANGUAGE } from '../../app/languages/common.languages';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
 
    public pageLanguage = _.find(HOME_LANGUAGE, { 'Code': AppLanguage.Code });
    public itemLanguage = this.pageLanguage.Items;
    public headerText: any;
    public firstName: any;
    public lastName: any;
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

    constructor(private navCtrl: NavController) {
        this.setClock();
        this.firstName = "Juan"
        this.lastName = "Dela Cruz"
        this.headerText = `${this.itemLanguage.Greetings} ${this.firstName} ${this.lastName}`;


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
