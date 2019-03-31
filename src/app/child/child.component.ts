import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  @Input() childMessage: string
  messageFromRxjs: string;

  randomMessage: string = "Random Number from child component: --> " +
    Math.floor((Math.random() * 999999999999999) + 1);

  message: string = "Random Number emmited from child: --> " +
    Math.floor((Math.random() * 999999999999999) + 1);

  constructor() { }


  @Output() messageEvent = new EventEmitter<string>();


  ngOnInit() {
    this.sendMessage();
   
  }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
