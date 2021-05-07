import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseRequestDetailsPage } from './purchase-request-details.page';


const routes: Routes = [
  {
    path: 'purchase-request-approval/purchase-request-details',
    component: PurchaseRequestDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRequestDetailsPageRoutingModule {}
