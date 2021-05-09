import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsPage } from './claims.page';
//import { AddRequestPage } from './add-request/add-request.page';

const routes: Routes = [
  {
    path: '',
        children: [
            {
                path: '',
                component: ClaimsPage,
            },
            //{
            //    path: 'add-request',
            //    component: AddRequestPage,
            //    loadChildren: () => import('./add-request/add-request.module').then(m => m.AddRequestPageModule)

            //},
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsPageRoutingModule {}
