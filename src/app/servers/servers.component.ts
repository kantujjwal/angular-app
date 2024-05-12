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
    serverCreationStatus: string = 'No server was created!'
    serverName = '';
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created!'
    }

    onUpdateServerName(event: Event) {
        // console.log(event.target.value);
        // this.serverName = event.target.value;
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
