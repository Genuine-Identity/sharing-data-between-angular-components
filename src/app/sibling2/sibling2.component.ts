import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-sibling-2',
  templateUrl: './sibling2.component.html',

})

export class Sibling2Component implements OnInit {
  message: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
}
