import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'headerbar',
  standalone: true,
  templateUrl: './headerbar.component.html',
  imports: [RouterModule, SidebarModule, OverlayPanelModule]
})
export class HeaderBarComponent {
  sidebarVisible = false;
}
