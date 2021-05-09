import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenealogyPage } from './genealogy.page';

const routes: Routes = [
  {
        path: '',
        children: [
            {
                path: '',
                component: GenealogyPage,
            },
        ]
   },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenealogyPageRoutingModule {}
