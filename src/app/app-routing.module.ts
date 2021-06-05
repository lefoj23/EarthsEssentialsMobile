import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../pages/login/login.page';
import { HomePage } from '../pages/home/home.page';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner.page';
import { ProfilePage } from '../pages/profile/profile.page';

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
            path: 'profile',
            component: ProfilePage,
            loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
        },
        {
            path: 'genealogy',
            loadChildren: () => import('../pages/genealogy/genealogy.module').then(m => m.GenealogyPageModule),
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
            path: 'claims',
            loadChildren: () => import('../pages/claims/claims.module').then(m => m.ClaimsPageModule),
        },
        {
            path: 'barcode-scanner',
            component: BarcodeScannerPage,
            loadChildren: () => import('../pages/barcode-scanner/barcode-scanner.module').then(m => m.BarcodeScannerPageModule)
        },
   
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
