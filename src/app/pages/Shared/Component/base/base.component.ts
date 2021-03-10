import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export class BaseComponent implements OnInit {
  token: string;
  isAuthorized = false;
  constructor(
    public route: Router,
    moduleName: string = ""
  ) {
    this.isAuthorized = true;
  }

  ngOnInit() {}

  authorize(permission: string) {
    if (this.token != null) return true;
    else return false;
  }

  authenticate() {
    if (this.token == null) {
      this.route.navigate(["/login"]);
    }
  }
}
