import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./success-alert/success-alert.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // styleUrl: './app.component.scss',
    styles: `
    h3 {
        color: dodgerblue;
    }`,
    standalone: true,
    imports: [RouterOutlet, ServerComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent]
})
export class AppComponent {
}
