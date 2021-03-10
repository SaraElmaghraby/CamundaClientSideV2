import { NgModule } from "@angular/core";
import { NbMenuModule, NbButtonModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "./Shared/shared.module";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule.forRoot(),

    NbButtonModule,
    SharedModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
