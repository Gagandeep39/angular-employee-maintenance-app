/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-25 21:01:21
 * @modify date 2020-03-25 21:01:21
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Below patch is a place holder until login features are not implemented
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  // To enable Lazy loading
  // 1. UnComment the below imported modules
  // 2. Comment Imported feature Modules in app.routing
  // 3. Set the root path in modules as '' instead of 'admin'
  // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
