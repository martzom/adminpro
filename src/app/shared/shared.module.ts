import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    declarations:[
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent

    ],
    exports:[
        SidebarComponent,
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent
    ]
})
export class SharedModule{}