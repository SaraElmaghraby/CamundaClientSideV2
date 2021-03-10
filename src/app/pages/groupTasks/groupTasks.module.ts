import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule,
  NbToastrModule,
  NbSelectModule,
  NbDialogModule
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { GroupTasksComponent } from "./groupTasks.component";
import { GetGroupTasksComponent } from "./components/get-groupTasks/get-groupTasks.component";
import { GroupTasksRoutingModule } from "./groupTasks-routing.module";
import { SharedModule } from "../Shared/shared.module";
import { FormsModule } from "@angular/forms";
import { GroupTaskdetailComponent } from "./components/groupTask.detail/groupTask.detail.component";

@NgModule({
  imports: [
    GroupTasksRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
    NbToastrModule,
    SharedModule,
    FormsModule,
    NbSelectModule,
    NbDialogModule.forChild()
  ],
  declarations: [GroupTasksComponent,GroupTaskdetailComponent,GetGroupTasksComponent],
  entryComponents: [ GroupTasksComponent,GroupTaskdetailComponent]
})
export class GroupTasksModule {}
