import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { environment } from '../../../../../environments/environment';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'ngx-rejecttask',
  templateUrl: './rejecttask.component.html',
  styleUrls: ['./rejecttask.component.scss']
})
export class RejecttaskComponent implements OnInit {
  users: any = [];
  taskId: any;
  userId: any;
  processInstanceId: any;
  groupType = false;
  userType = false;
  assignType = 1;
  constructor(private http: HttpClient, private service: TasksService, private diag: NbDialogRef<RejecttaskComponent>,
    private toast: NbToastrService,

  ) {

  }

  ngOnInit() {
  }

  reject() {
    let body = {
      variables: {
        IsApproved: {
          value: "false",
          type: "Boolean",
        },
      },
    };
    console.log(this.userId);

    let assigneeBody = {
      "userId": this.userId
    }



    this.service.post(body, "task/" + this.taskId + "/submit-form").subscribe((res) => {

      this.service.getApi('task?processInstanceId=' + this.processInstanceId).subscribe((res: any) => {


        if (this.userType)

          this.service.post(assigneeBody, 'task/' + res[0].id + '/assignee').subscribe(res => {
            this.diag.close('true');
          });

        else if(this.groupType){
          let assigneeGroup = {
            "groupId": this.userId,
            "type": "candidate"
          }

          this.service.post(assigneeGroup, 'task/' + res[0].id + '/identity-links').subscribe(res => {
            this.diag.close('true');
          });
        }else {
          this.diag.close('true');

        }


      })

      this.toast.success("reject task successfully", "success");
      this.ngOnInit();
    });
  }

  assignSelect() {
    if (this.assignType == 1) {
      this.userType = true;
      this.groupType = false;

      this.http.get(environment.apiurl + 'user').subscribe((res = []) => {
        this.users = res;
      })
    } else {
      this.userType = false;
      this.groupType = true;
      this.http.get(environment.apiurl + 'group').subscribe((res = []) => {
        this.users = res;
      })
    }
  }
}
