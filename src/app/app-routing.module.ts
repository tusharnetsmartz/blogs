import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './shared/auth.guard';
import { RouteGuard } from './shared/route.guard';

const routes: Routes = [
  { path: '', redirectTo: environment.landingpage, pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then((m) => m.BlogsModule),
    canActivate: [AuthGuard]
  },
  { path: 'auth/login', 
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  canActivate: [RouteGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
