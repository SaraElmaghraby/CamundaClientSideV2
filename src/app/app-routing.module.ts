import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./pages/account/account.module')
    .then(m=> m.AccountModule),
  },
  { path: '', redirectTo: 'admin/mytasks', pathMatch: 'full' },  
  { path: '', redirectTo: 'admin/myGrouptasks', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' }
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
