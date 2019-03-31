import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})

export class SiblingComponent implements OnInit {
  constructor(private data: DataService) { }
  ngOnInit() { }
  newMessage() {
    let randomMessage = "Random Number from sibling component: --> " +
      Math.floor((Math.random() * 999999999999999) + 1);
    this.data.changeMessage(randomMessage)
  }
}
