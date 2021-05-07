
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchaseRequestDetailsPage } from './purchase-request-details.page';
import { HeaderNavComponentModule } from '../../../app/header-nav/header-nav.module';

import { PurchaseRequestDetailsPageRoutingModule } from './purchase-request-details-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderNavComponentModule,
    PurchaseRequestDetailsPageRoutingModule
  ],
  declarations: [PurchaseRequestDetailsPage]
})
export class PurchaseRequestDetailsPageModule {}
