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
import { TasksComponent } from "./tasks.component";
import { GetMyTasksComponent } from "./components/get-tasks/get-tasks.component";
import { TasksRoutingModule } from "./tasks-routing.module";
import { SharedModule } from "../Shared/shared.module";
import { FormsModule } from "@angular/forms";
import { TaskdetailComponent } from "./components/task.detail/task.detail.component";
import { RejecttaskComponent } from "./components/rejecttask/rejecttask.component";
import { GroupTaskdetailComponent } from "../groupTasks/components/groupTask.detail/groupTask.detail.component";

@NgModule({
  imports: [
    TasksRoutingModule,
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
  declarations: [TasksComponent,TaskdetailComponent,RejecttaskComponent],
  entryComponents: [ TaskdetailComponent,RejecttaskComponent]
})
export class TasksModule {}
