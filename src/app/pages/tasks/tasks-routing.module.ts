import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetMyTasksComponent } from './components/get-tasks/get-tasks.component';


const routes: Routes = [{
  path: '',
  component: GetMyTasksComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule { }

