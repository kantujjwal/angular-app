import { Component } from '@angular/core';
import { ServerComponent } from "../server/server.component";

@Component({
    selector: '.app-servers',
    standalone: true,
    // templateUrl: './servers.component.html',
    templateUrl: './servers.component.html',
    styleUrl: './servers.component.scss',
    imports: [ServerComponent]
})
export class ServersComponent {
    allowNewServer: boolean = false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

}
