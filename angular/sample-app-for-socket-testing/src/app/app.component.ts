import { Component } from '@angular/core';
// import Stomp from 'stompjs';
// import SockJS from 'sockjs-client';
 import * as $ from 'jquery';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';


// import * as Stomp from ‘stompjs’;
//
// import * as SockJS from ‘sockjs-client’;
//
// import * as $ from ‘jquery’;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private serverUrl = 'http://localhost:8080/socket'
  private title = 'WebSockets chat';
  private stompClient;

  constructor(){

    this.initializeWebSocketConnection();
  }
  ws;

  // initializeWebSocketConnection(){
  //   let ws = new SockJS(this.serverUrl);
  //
  //   this.stompClient = Stomp.over(ws);
  //    let that = this;
  //   this.stompClient.connect({}, function(frame) {
  //     that.stompClient.subscribe("/chat", (message) => {
  //       if(message.body) {
  //         $(".chat").append("<div class='message'>"+message.body+"</div>")
  //         console.log(message.body);
  //         console.log(ws._transport.url);
  //       }
  //     });
  //   });
  // }
  initializeWebSocketConnection(){
  this.ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(this.ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      this.sessionId = /\/([^\/]+)\/websocket/.exec(this.ws._transport.url)[1];
      that.stompClient.subscribe("/chat/"+this.sessionId, message => {
        if (message.body) {
          var responseDiv = document.createElement("div");
          responseDiv.className = "message";
          responseDiv.style.cssText =
            "display: block; background-color: lightgreen; border: 1px solid red; border-radius: 5px; width: 70%; padding: 10px;  overflow: hidden;";
          responseDiv.innerHTML =
            responseDiv.innerHTML + "Bot : " + message.body;
          document.getElementsByClassName("chat")[0].appendChild(responseDiv);
          // $(".message").append("<div>"+'Bot : '+  message.body + "</div>");
          // console.log(message.body);
          console.log("session id " + this.sessionId);
          // console.log(/SESS\w*ID=([^;]+)/i.test(document.cookie) ? RegExp.$1 : false);
        }
      });
    });

}
sendMessage(message, event: Event) {
    var userDiv = document.createElement("div");
    userDiv.className = "typed";
    userDiv.style.cssText =
      "display: block;background: white; overflow: hidden; padding: 10px; border: 1px solid red;  border-radius: 5px; margin-left: 30%;  text-align: right; ";
    userDiv.innerHTML =
      userDiv.innerHTML +
      "<span> Me : </span>" +
      // "<mat-card><mat-card-header><mat-card-subtitle> Me </mat-card-subtitle></mat-card-header><mat-card-content>" +
      message +
      "</mat-card-content></mat-card>";
    document.getElementsByClassName("chat")[0].appendChild(userDiv);
    // $(".typed").append("<div>" + 'Me : ' + message + "</div>");
    event.preventDefault();
    this.stompClient.send("/app/send/message", {}, "{\"message\":"+ "\""+ message+ "\""+  ",\"sessionId\":"+"\""+  /\/([^\/]+)\/websocket/.exec(this.ws._transport.url)[1] + "\""+ "}");
    $("#input").val("");

  }
  // sendMessage(message){
  //   this.stompClient.send("/app/send/message" , {}, message);
  //   $('#input').val('');
  // }

}
