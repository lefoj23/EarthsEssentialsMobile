import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Claims } from '../interfaces/claims.interface' 
import * as ClaimsActions from '../actions/claims.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { GenealogyService } from '../api-services/genealogy.service';
import { MenuController,LoadingController } from '@ionic/angular';
import { PrimeToastHelper } from '../helper/primeToast.helper';
import { UserDetails } from '../interfaces/user-details.interface' 

@Injectable({
    providedIn: 'root'
  })

export class GenealogyActionCreator {

    binary:any;

    constructor(public store: Store<AppState> ,
                private loadingController: LoadingController,
                public primeToastHelper: PrimeToastHelper,
                private genealogyService: GenealogyService ){}

    async GetBinary(userId){
    
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
           // duration: 1000
        });
         loading.present();


    this.genealogyService.GetBinary(userId).subscribe(
            data  => {
                if(data.status){
                    this.binary = data.items;
                }
               console.log(data)
               loading.dismiss();
             
            },
            err => {
                console.log(err)
               this.primeToastHelper.ErrorTopCenter("Error!","Something went wrong, Please Try Again.");
                        loading.dismiss();

              
            }
        );
     
       // return resp;

    }
    
   

}

