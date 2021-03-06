import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from '../account.component';


const routes: Routes = [{
  path: '',
  component: AccountComponent,
  children:[{
  path: 'login',
  component: LoginComponent,
}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
