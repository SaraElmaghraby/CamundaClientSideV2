import { Component } from "@angular/core";

@Component({
  selector: "ngx-tables",
  template: `
    <nb-layout windowMode>
      <nb-layout-column class="auth-layout">
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AccountComponent {}
