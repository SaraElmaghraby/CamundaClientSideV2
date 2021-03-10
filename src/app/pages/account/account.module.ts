import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbAlertModule, NbButtonModule, NbLayoutModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login/components/login/login.component';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './login/account.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
      FormsModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbAlertModule,
    NbIconModule,
    AccountRoutingModule,
    NbButtonModule,
    NbLayoutModule

  ],
  declarations: [
    LoginComponent,
    AccountComponent,
  ],
})
export class AccountModule { }
