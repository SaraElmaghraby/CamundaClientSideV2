import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbToastrModule,
  NbTabsetModule,
  NbToggleModule,
  NbDialogModule,
  NbSelectModule,
  NbAlertModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { FormsModule } from "@angular/forms";


import { GetMyTasksComponent } from "../tasks/components/get-tasks/get-tasks.component";
import { CreateFormComponent } from "../request-form/components/create-form/create-form.component";


@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    FormsModule,
    NbToggleModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
    NbToastrModule,
    NbTabsetModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
    NbToastrModule,
    NbDialogModule.forChild(),
    FormsModule,
    NbSelectModule,
    NbAlertModule
  ],
  declarations: [

    GetMyTasksComponent,

    CreateFormComponent,

  ],
  entryComponents:[CreateFormComponent]
})
export class SharedModule {}
