import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

import { HomeService } from '../api-services/home.service';
import { MenuController,LoadingController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PrimeToastHelper } from '../helper/primeToast.helper';



@Injectable({
    providedIn: 'root'
  })

export class HomeActionCreator {
   // myRequest: Observable<MyRequest[]>;

    constructor(public store: Store<AppState> ,
                private router: Router,
                private menuController: MenuController,
                private loadingController: LoadingController,
                public primeToastHelper: PrimeToastHelper,
                private homeService: HomeService ){
       // this.myRequest = this.store.select('myRequest');
    }

   
    GetDashboardData(){
        this.homeService.GetDashboardData().subscribe(
            data  => {
                console.log(data)

            
             
            },
            err => {
             console.log(err)
                 this.primeToastHelper.ErrorTopCenter("Error!","Something went wrong, Please Try Again.");
         
             
            }
        );

    }


}

