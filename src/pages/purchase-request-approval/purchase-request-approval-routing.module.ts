import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseRequestApprovalPage } from './purchase-request-approval.page';
import { PurchaseRequestDetailsPage } from './purchase-request-details/purchase-request-details.page';

const routes: Routes = [
  {
        path: '',
        children: [
            {
                path: '',
                component: PurchaseRequestApprovalPage,
            },
            {
                path: 'purchase-request-details',
                component: PurchaseRequestDetailsPage,
                loadChildren: () => import('./purchase-request-details/purchase-request-details.module').then(m => m.PurchaseRequestDetailsPageModule)   

            },
        ]
   },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRequestApprovalPageRoutingModule {}
