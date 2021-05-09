
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GenealogyPage } from './genealogy.page';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { OrganizationChartModule } from 'primeng/organizationchart';
import { GenealogyPageRoutingModule } from './genealogy-routing.module';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
        ReactiveFormsModule,
        OrganizationChartModule,
        PanelModule,
    FormsModule,
    HeaderNavComponentModule,
    GenealogyPageRoutingModule
  ],
  declarations: [GenealogyPage]
})
export class GenealogyPageModule {}
