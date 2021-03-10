import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetGroupTasksComponent } from './components/get-groupTasks/get-groupTasks.component';


const routes: Routes = [{
  path: '',
  component: GetGroupTasksComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupTasksRoutingModule { }

