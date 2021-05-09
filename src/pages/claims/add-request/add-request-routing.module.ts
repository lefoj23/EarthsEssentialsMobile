import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRequestPage } from './add-request.page';


const routes: Routes = [
  {
    path: 'my-request/add-request',
    component: AddRequestPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRequestPageRoutingModule {}
