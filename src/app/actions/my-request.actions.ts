import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { MyRequest } from '../interfaces/my-request.interface' 

export const ADD_MYREQUEST = '[MY_REQUEST] Add'
export const EDIT_MYREQUEST = '[MY_REQUEST] Edit'
export const DELETE_MYREQUEST = '[MY_REQUEST] Delete'

export class AddMyRequest implements Action{
    readonly type = ADD_MYREQUEST

    constructor(public payload:MyRequest){}

}

export class EditMyRequest implements Action{
    readonly type = EDIT_MYREQUEST

    constructor(public payload:string){}

}

export class DeleteMyRequest implements Action{
    readonly type = DELETE_MYREQUEST

    constructor(public payload:number){}

}

export  type Actions = AddMyRequest | EditMyRequest | DeleteMyRequest