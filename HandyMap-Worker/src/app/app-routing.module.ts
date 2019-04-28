import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'sign-up', loadChildren: './auth/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'log-in', loadChildren: './auth/log-in/log-in.module#LogInPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
