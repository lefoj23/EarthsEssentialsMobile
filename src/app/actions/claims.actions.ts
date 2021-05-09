import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Claims } from '../interfaces/claims.interface' 

export const ADD_CLAIMS = '[CLAIMS] Add'
export const EDIT_CLAIMS = '[CLAIMS] Edit'
export const DELETE_CLAIMS = '[CLAIMS] Delete'

export class AddClaims implements Action{
    readonly type = ADD_CLAIMS

    constructor(public payload:Claims){}

}

export class EditClaims implements Action{
    readonly type = EDIT_CLAIMS

    constructor(public payload:string){}

}

export class DeleteClaims implements Action{
    readonly type = DELETE_CLAIMS

    constructor(public payload:number){}

}

export  type Actions = AddClaims | EditClaims | DeleteClaims