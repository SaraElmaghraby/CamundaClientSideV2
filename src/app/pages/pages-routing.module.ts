import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "mytasks",
        loadChildren: () =>
          import("./tasks/tasks.module").then((m) => m.TasksModule),
      },
      {
        path: "myGrouptasks",
        loadChildren: () =>
          import("./groupTasks/groupTasks.module").then((m) => m.GroupTasksModule),
      },
      {
        path: "form",
        loadChildren: () =>
          import("./request-form/form.module").then((m) => m.FormModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
