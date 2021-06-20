import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Login } from '../interfaces/login.interface' ;
import { AccountsService } from '../api-services/accounts.service';
import { MenuController,LoadingController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PrimeToastHelper } from '../helper/primeToast.helper';
import { UserDetails } from '../interfaces/user-details.interface' 


@Injectable({
    providedIn: 'root'
  })

export class AccountsActionCreator {
   // myRequest: Observable<MyRequest[]>;
   userDetails:UserDetails;
    constructor(public store: Store<AppState> ,
                private router: Router,
                private menuController: MenuController,
                private loadingController: LoadingController,
                public primeToastHelper: PrimeToastHelper,
                private accountsService: AccountsService ){
       // this.myRequest = this.store.select('myRequest');
    }

    async SignIn(loginCredentials:Login){
    
        //console.log(loginCredentials)
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
           // duration: 1000
        });
         loading.present();
        
        // var getMyRequest; 
        // this.myRequest.subscribe(
        //     Success  => {
             
        //         getMyRequest =  Success
       
        //     },
        //     Err => {
        //         var myRequest = <MyRequest[]>{};
        //         getMyRequest =  myRequest;
        //     }
        // );
        //let resp;
        this.accountsService.AuthenticateUser(loginCredentials).subscribe(
                data  => {
                    console.log(data.status)

                    if(data.status){
                        this.primeToastHelper.SuccessTopCenterCallback("Success!","Log In Success!").then(resp =>{
                            this.SaveToken(data.auth);
                            this.StoreUserSession(data.user);

                   
                            
                            loading.dismiss();

                            this.router.navigate(['/home'])
                            this.menuController.enable(true)
    
                        })
                    }else{
                        this.primeToastHelper.WarningTopCenter("Oops! Log In Failed.","Invalid Username or Password!")
                        loading.dismiss();
                        this.RemoveToken();
                        
                    }
                    //this.primeToastHelper.SuccessSticky()
                    
                     //this.primeToastHelper.ErrorTopCenter("Error!","Something went wrong, Please Try Again.");
    
                     //this.primeToastHelper.WarningTopCenter("Error!","Invalid Username/Password!");
                   

                   
                
                 
                },
                err => {
                 
                     this.primeToastHelper.ErrorTopCenter("Error!","Something went wrong, Please Try Again.");
                  //  this.primeToastHelper.SuccessSticky()
                        this.RemoveToken();
                        loading.dismiss();
                 
                }
            );

    }
    

    
    SignOut(){
     
        this.accountsService.SignOut().subscribe(
            data  => {
        
                    console.log(data)
                if(data.status){
                    this.RemoveToken();
                    this.RemoveUserSession();
                 
                    this.menuController.close('appMenu');

                    this.router.navigate(['/login'])
                    this.menuController.enable(false)
              
                }
    
                
             
            },
            err => {
                 this.primeToastHelper.ErrorTopCenter("Error!","Something went wrong, Please Try Again.");

              
            }
        );
     

    }

    StoreUserSession(data: UserDetails){
        localStorage.setItem('userDetails', JSON.stringify(data));

    }

 
    SaveToken(tokenKey){
     
        localStorage.setItem('sessionToken', `Bearer ${tokenKey}`);

    }

    RemoveToken(){
        localStorage.removeItem('sessionToken');

    }
    RemoveUserSession(){
        localStorage.removeItem('userDetails');

    }

    GetUserSession(){
        this.accountsService.GetUserSession().subscribe(
            data  => {
        
                this.userDetails = data;
              
            },
            err => {
                 this.primeToastHelper.ErrorTopCenter("Error!","Something went wrong, Please Try Again.");
              
              
            }
        );
     
    }
    // AddMyRequest(model:MyRequest){
    //     this.store.dispatch(new MyRequestActions.AddMyRequest(model) );
    // }


    // EditMyRequest(model){
    //     this.store.dispatch(new MyRequestActions.EditMyRequest(model) );
    // }



}

