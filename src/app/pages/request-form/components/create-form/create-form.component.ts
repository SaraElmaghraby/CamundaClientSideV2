import { Component, OnInit } from "@angular/core";
import { FormService } from "../../services/form.service";
import { NbToastrService } from "@nebular/theme";
import { FormVariable } from "../../form-variables";

@Component({
  selector: "ngx-create-form",
  templateUrl: "./create-form.component.html",
  styleUrls: ["./create-form.component.scss"],
})
export class CreateFormComponent implements OnInit {
  validName = true;
  model: any = {};
  validmail = true;
  formKey: string;
  key: any = [];
  values: any = [];
  form: FormVariable[];
  constructor(private service: FormService, private toast: NbToastrService) {}
  finish = false;
  ngOnInit() {
    this.model.IsHeadBranch = false;
    this.formKey = 'CamundaFormTask';

    this.service.getApi('process-definition/key/'+ this.formKey + '/form-variables').subscribe((res : FormVariable[])=>{
      for (let key of Object.keys(res)) {
        this.key.push(key);
      }

      for (let val of Object.values(res)) {
        this.values.push(val);
      }




      this.form = res;
      console.log(this.values);
      this.finish = true;

    });
  }

  addNewForm() {


    console.log(this.form);
    console.log(this.values);


    // this.form.forEach((res, index)=>{
    //   res.value.value = this.values[index].value;
    // })

    var count = 0;
    for (let val of Object.values(this.form)) {

      val.value = this.values[count].value;
      count++;

    }




    // if (this.model.name == null || this.model.name == "") {
    //   this.validName = false;
    // }
    // if (this.model.email == null || this.model.email == "") {
    //   this.validmail = false;
    // }
    //  if(this.model.name != null && this.model.name != "" && this.model.email != null && this.model.email != "")  {
     let requestVar = {} as any;
       requestVar.variables = this.form;
      this.service
        .post(requestVar, "process-definition/key/CamundaFormTask/start")
        .subscribe(
          (res: any) => {
            this.toast.show("Added Successfully", "Sucess", {
              status: "success",
            });
          },
          (error) => {
            this.toast.show("SomeThing Failed", "Error", { status: "danger" });
          }
        );
    }
  }

