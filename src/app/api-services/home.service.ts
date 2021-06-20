import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { MyRequest } from '../interfaces/my-request.interface' 
import * as MyRequestActions from '../actions/my-request.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable ,of} from 'rxjs';
import { API_HOST } from '../constants/api-host.constants' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../interfaces/login.interface' ;


@Injectable({
    providedIn: 'root'
  })

export class HomeService {
    private apiHost: string = `${API_HOST}/api/mobile`;
    private sessionToken = localStorage.getItem('sessionToken') != null ? localStorage.getItem('sessionToken') : null

    constructor(public store: Store<AppState>,  private http: HttpClient){
       
    }

    GetDashboardData():Observable<any>{

    var headers = new HttpHeaders().set('Content-Type', `application/json`)
                                   .set('Authorization', this.sessionToken);

    return this.http.get(this.apiHost  + "/dashboard", { headers: headers })

    }
    
  


}

