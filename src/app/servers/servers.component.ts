import { Component } from '@angular/core';
import { ServerComponent } from "../server/server.component";

@Component({
    selector: '.app-servers',
    standalone: true,
    // templateUrl: './servers.component.html',
    template: `
    <app-server></app-server>
    
    <app-server></app-server>
    `,
    styleUrl: './servers.component.scss',
    imports: [ServerComponent]
})
export class ServersComponent {

}
