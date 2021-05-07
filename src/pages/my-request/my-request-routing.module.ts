import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRequestPage } from './my-request.page';
import { AddRequestPage } from './add-request/add-request.page';

const routes: Routes = [
  {
    path: '',
        children: [
            {
                path: '',
                component: MyRequestPage,
            },
            {
                path: 'add-request',
                component: AddRequestPage,
                loadChildren: () => import('./add-request/add-request.module').then(m => m.AddRequestPageModule)

            },
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRequestPageRoutingModule {}
