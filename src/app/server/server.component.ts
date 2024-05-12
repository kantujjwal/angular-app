import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  standalone: true
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
