import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: 'ngx-groupTask.detail',
  templateUrl: './groupTask.detail.component.html',
  styleUrls: ['./groupTask.detail.component.scss']
})
export class GroupTaskdetailComponent implements OnInit {
  id: string;
  name: string;
  key = [];
  values = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get(environment.apiurl + "task/" + this.id + "/variables")
    .subscribe((res) => {
      for (let key of Object.keys(res)) {
        this.key.push(key);
      }

      for (let val of Object.values(res)) {
        this.values.push(val);
      }
    });
  }

}
