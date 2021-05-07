import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { MyRequest } from '../interfaces/my-request.interface' 
import * as MyRequestActions from '../actions/my-request.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/app.state';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class MyRequestActionCreator {
    myRequest: Observable<MyRequest[]>;

    constructor(public store: Store<AppState> ){
        this.myRequest = this.store.select('myRequest');
    }

    GetMyRequest():any{
    
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

        return this.myRequest; 
    }
    
    AddMyRequest(model:MyRequest){
        this.store.dispatch(new MyRequestActions.AddMyRequest(model) );
    }


    EditMyRequest(model){
        this.store.dispatch(new MyRequestActions.EditMyRequest(model) );
    }



}

