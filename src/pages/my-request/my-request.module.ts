
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyRequestPage } from './my-request.page';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { MyRequestPageRoutingModule } from './my-request-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderNavComponentModule,
    MyRequestPageRoutingModule
  ],
  declarations: [MyRequestPage]
})
export class MyRequestPageModule {}
