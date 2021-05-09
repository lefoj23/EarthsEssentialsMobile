import { Action } from '@ngrx/store'
import { Claims } from '../interfaces/claims.interface' 
import * as ClaimsActions from '../actions/claims.actions'

var initialState : Claims[] = [
    {
        ReferenceNumber: "PR00001",
        Description: "PR Description Test1",
        Site: "Bulacan",
        Date: "Aug 08, 2020",
        Status: "Approved",
    },
    {
        ReferenceNumber: "PR00002",
        Description: "PR Description Test2",
        Site: "Quezon City",
        Date: "Aug 08, 2020",
        Status: "Completed PO",
    },
    {
        ReferenceNumber: "PR00003",
        Description: "PR Description Test3",
        Site: "Pasig City",
        Date: "Aug 08, 2020", 
        Status: "Approved",
    },
    {
        ReferenceNumber: "PR00004",
        Description: "PR Description Test4",
        Site: "Davao City",
        Date: "Aug 08, 2020",
        Status: "Pending",
    },
    {
        ReferenceNumber: "PR00005",
        Description: "PR Description Test5",
        Site: "Cebu City",
        Date: "Aug 08, 2020",
        Status: "Pending",
    },
    {
        ReferenceNumber: "PR00006",
        Description: "PR Description Test6",
        Site: "General Santos City",
        Date: "Aug 08, 2020",
        Status: "Rejected",
    },
  ];




export function ClaimsReducer(state: Claims[] = initialState, action: ClaimsActions.Actions){
    switch(action.type){
        case ClaimsActions.ADD_CLAIMS:
            return [...state,action.payload];
        case ClaimsActions.EDIT_CLAIMS:
                //.splice(action.payload, 1)
                let obj = action.payload;
               // var index = state.findIndex(item => item.ReferenceNumber == obj.ReferenceNumber);
      
                        
                var newObj = [];
              
                //state.map(item=>{
                state.forEach( item=>{   
                   var newElement:Claims = {
                    ReferenceNumber : item.ReferenceNumber,
                    Description : item.Description,
                    Site : item.Site,
                    Date : item.Date,
                    Status :  item.ReferenceNumber == action.payload ?  "Approved"  : item.Status

                   };

                      

                 newObj.push(newElement);
           
                });
                
             
                   
            return newObj;
        case ClaimsActions.DELETE_CLAIMS:
        
                 const newState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
                 return newState;
        default :
            return state;           
    }
}

