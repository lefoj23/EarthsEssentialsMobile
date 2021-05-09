
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClaimsPage } from './claims.page';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { ClaimsPageRoutingModule } from './claims-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderNavComponentModule,
    ClaimsPageRoutingModule
  ],
  declarations: [ClaimsPage]
})
export class ClaimsPageModule {}
