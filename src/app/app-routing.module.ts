import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab5Page } from '../pages/tab5/tab5.page';
import { LoginPage } from '../pages/login/login.page';
import { HomePage } from '../pages/home/home.page';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner.page';

const routes: Routes = [
      //{
      //  path: '',
      //  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
      //},
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
        },
        {
            path: 'login',
            component: LoginPage,
            loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
        },
        {
            path: 'home',
            component: HomePage,
            loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
        },
        {
            path: 'purchase-request-approval',
            loadChildren: () => import('../pages/purchase-request-approval/purchase-request-approval.module').then(m => m.PurchaseRequestApprovalPageModule),
        },
        {
            path: 'my-request',
            loadChildren: () => import('../pages/my-request/my-request.module').then(m => m.MyRequestPageModule),
        },
        {
            path: 'barcode-scanner',
            component: BarcodeScannerPage,
            loadChildren: () => import('../pages/barcode-scanner/barcode-scanner.module').then(m => m.BarcodeScannerPageModule)
        },
        {
            path: 'tab5',
            component: Tab5Page,
            loadChildren: () => import('../pages/tab5/tab5.module').then(m => m.Tab5PageModule)
        },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
