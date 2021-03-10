import { Component, OnInit } from "@angular/core";
import { NbAuthSocialLink } from "@nebular/auth";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { AccountService } from "../../services/user.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  protected options: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  user: User;
  submitted: boolean;
  socialLinks: NbAuthSocialLink[];
  rememberMe: boolean;
  authFailed = false;
  constructor(private userService: AccountService, private route: Router) {
    this.user = {} as User;
  }

  ngOnInit() {}
  login() {
    this.userService.login(this.user).subscribe(
      (result) => {
        if (result != null && result.authenticated) {
          localStorage.setItem("userName", result.authenticatedUser);
          this.route.navigate(["admin/mytasks"]);
        } else this.authFailed = true;
      },
      (error) => {
        this.authFailed = true;
      }
    );
  }
}
