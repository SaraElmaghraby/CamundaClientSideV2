import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../../Shared/Component/base/base.component";
import { Router } from "@angular/router";
import { NbToastrService, NbDialogService } from "@nebular/theme";
import { TasksService } from "../../../../pages/tasks/services/tasks.service";
import { GroupTaskdetailComponent } from "../groupTask.detail/groupTask.detail.component";

@Component({
  selector: 'ngx-get-groupTasks',
  templateUrl: './get-groupTasks.component.html',
  styleUrls: ['./get-groupTasks.component.scss']
})
export class GetGroupTasksComponent extends BaseComponent implements OnInit {

  finishLoading = false;
  model: any = [];
  constructor(
    private service: TasksService,
    router: Router,
    private toast: NbToastrService,
    private diag: NbDialogService
  ) {
    super(router, "");
  }
  ngOnInit() {
   // if (this.isAuthorized)
     this.loadGroupTasks();
  }
  loadGroupTasks() {
    const name = localStorage.getItem("userName");
    this.service.getApi("task/?candidateUser=" + name).subscribe((result = []) => {
      this.model = result;
      this.finishLoading = true;
    });
  }
  detail(id, name) {
    this.diag.open(GroupTaskdetailComponent, { context: { id: id, name: name } });
  }
  claim(id) {
    let body = {
      userId:localStorage.getItem("userName")
    };
    this.service.post   (body, "task/" + id + "/claim").subscribe((res) => {
      this.toast.success("Task claimed successfully", "success");
      this.ngOnInit();
    });
  }
}
