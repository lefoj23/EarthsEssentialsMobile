
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';
import { ChartsModule } from 'ng2-charts';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    HeaderNavComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
