import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Claims } from '../interfaces/claims.interface' 
import * as ClaimsActions from '../actions/claims.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/app.state';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ClaimsActionCreator {
    claims: Observable<Claims[]>;

    constructor(public store: Store<AppState> ){
        this.claims = this.store.select('claims');
    }

    GetClaims():any{
    
        // var getClaims; 
        // this.Claims.subscribe(
        //     Success  => {
             
        //         getClaims =  Success
       
        //     },
        //     Err => {
        //         var Claims = <Claims[]>{};
        //         getClaims =  Claims;
        //     }
        // );

        return this.claims; 
    }
    
    AddClaims(model:Claims){
        this.store.dispatch(new ClaimsActions.AddClaims(model) );
    }


    EditClaims(model){
        this.store.dispatch(new ClaimsActions.EditClaims(model) );
    }



}

