import { Action } from '@ngrx/store'
import { Test } from '../interfaces/test.interface' 
import * as TestActions from '../actions/test.actions'

const initialState : Test = {
    name: 'Initital Test',
    url: 'http://google.com' 

}


export function TestReducer(state: Test[] = [initialState], action: TestActions.Actions){
    switch(action.type){
        case TestActions.ADD_TEST:
            return [...state,action.payload];
        case TestActions.REMOVE_TEST:
                //.splice(action.payload, 1)
                const newState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
            return  newState
        default :
            return state;           
    }
}

