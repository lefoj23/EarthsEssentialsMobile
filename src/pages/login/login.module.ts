
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LoginPage } from './login.page';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { LoginPageRoutingModule } from './login-routing.module';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderNavComponentModule,
    LoginPageRoutingModule
  ],
  providers:[AndroidFingerprintAuth],
  declarations: [LoginPage],
})
export class LoginPageModule {}
