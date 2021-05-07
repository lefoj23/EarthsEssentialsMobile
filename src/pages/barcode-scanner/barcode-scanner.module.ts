
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarcodeScannerPage } from './barcode-scanner.page';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';
import { BarcodeScannerPageRoutingModule } from './barcode-scanner-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderNavComponentModule,
    BarcodeScannerPageRoutingModule
  ],
  declarations: [BarcodeScannerPage]
})
export class BarcodeScannerPageModule {}
