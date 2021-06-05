
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderNavComponentModule,
    ProfilePageRoutingModule
  ],
  providers:[AndroidFingerprintAuth],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
