
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddRequestPage } from './add-request.page';
import { HeaderNavComponentModule } from '../../../app/header-nav/header-nav.module';

import { AddRequestPageRoutingModule } from './add-request-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderNavComponentModule,
    AddRequestPageRoutingModule
  ],
   declarations: [AddRequestPage]
})
export class AddRequestPageModule {}
