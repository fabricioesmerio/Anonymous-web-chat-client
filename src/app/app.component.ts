import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Debug)
    .withUrl("https://localhost:7204/chat", {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

  constructor(http: HttpClient) {

  }

  ngOnInit(): void {
    this.connection.start()
      .then(() => {
        console.log(this.connection.connectionId)
      })
      .catch(err => {
        console.error('==========> ', err)
      })
  }

  title = 'angularapp';
}
