import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule,
  NbToastrModule,
  NbDialogModule,
  NbSelectModule,
  NbAlertModule,
  NbToggleModule
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { FormRoutingModule } from "./form-routing.module";
import { FormComponent } from "./form.component";
import { SharedModule } from "../Shared/shared.module";
import { CreateFormComponent } from "./components/create-form/create-form.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
    NbToastrModule,
    SharedModule,
    NbDialogModule.forChild(),
    FormsModule,
    NbSelectModule,
    NbAlertModule,
    NbToggleModule
  ],
  declarations: [
    FormComponent,
  ],
  entryComponents: [CreateFormComponent]
})
export class FormModule {}
