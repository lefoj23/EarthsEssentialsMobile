
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PurchaseRequestApprovalPage } from './purchase-request-approval.page';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { PurchaseRequestApprovalPageRoutingModule } from './purchase-request-approval-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderNavComponentModule,
    PurchaseRequestApprovalPageRoutingModule
  ],
  declarations: [PurchaseRequestApprovalPage]
})
export class PurchaseRequestApprovalPageModule {}
