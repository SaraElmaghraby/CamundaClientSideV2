import { Component, OnInit } from "@angular/core";

import { BaseComponent } from "../../../Shared/Component/base/base.component";
import { Router } from "@angular/router";
import { NbToastrService, NbDialogService } from "@nebular/theme";
import { TasksService } from "../../services/tasks.service";
import { TaskdetailComponent } from "../task.detail/task.detail.component";
import { RejecttaskComponent } from "../rejecttask/rejecttask.component";

@Component({
  selector: "ngx-get-tasks",
  templateUrl: "./get-tasks.component.html",
  styleUrls: ["./get-tasks.component.scss"],
})
export class GetMyTasksComponent extends BaseComponent implements OnInit {
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
    if (this.isAuthorized) this.loadMyTasks();
  }

  loadMyTasks() {
    const name = localStorage.getItem("userName");
    this.service.getApi("task/?assignee=" + name).subscribe((result = []) => {
      this.model = result;
      this.finishLoading = true;
    });
  }

  detail(id, name) {
    this.diag.open(TaskdetailComponent, { context: { id: id, name: name } });
  }
  accept(id) {
    let body = {
      variables: {
        IsApproved: {
          value: "true",
          type: "Boolean",
        },
      },
    };
    this.service.post(body, "task/" + id + "/submit-form").subscribe((res) => {
      this.toast.success("accept task successfully", "success");
      this.ngOnInit();
    });
  }

  reject(id, processInstanceId) {

    this.diag.open(RejecttaskComponent,{context:{taskId: id, processInstanceId: processInstanceId}})
    .onClose.subscribe(res=> {
      if(res == 'true') this.ngOnInit();
    });
    // let body = {
    //   variables: {
    //     IsApproved: {
    //       value: "false",
    //       type: "Boolean",
    //     },
    //   },
    // };
    // this.service.post(body, "task/" + id + "/submit-form").subscribe((res) => {
    //   this.toast.success("reject task successfully", "success");
    //   this.ngOnInit();
    // });
  }

  Unclaim(id){
  
    this.service.post   ({}, "task/" + id + "/unclaim").subscribe((res) => {
      this.toast.success("Task unclaimed successfully", "success");
      this.ngOnInit();
    });


  }
}
