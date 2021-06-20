import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LanguageSettingsHelper } from '../app/helper/language-settings.helper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TestReducer } from './reducers/test.reducer';
import { MyRequestReducer } from './reducers/my-request.reducer';
import { ClaimsReducer } from './reducers/claims.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { PrimeToastHelper } from './helper/primeToast.helper';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastModule,
        StoreModule.forRoot({
          test: TestReducer,
            myRequest: MyRequestReducer,
            claims: ClaimsReducer
        }),
        StoreDevtoolsModule.instrument({
          maxAge: 10 // number of states to retain
        })
        ],
    providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    LanguageSettingsHelper,
    PrimeToastHelper,
    MessageService,
    AndroidFingerprintAuth,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
