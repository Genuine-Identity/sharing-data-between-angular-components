import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { ChildComponent } from './child/child.component'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  name = 'Angular Learning sharing-data-between-angular-components :: Learning...';
  parentToChildMessage: string;
  ViewChildMessage: string;

  receivedMessage: string;


  @ViewChild(ChildComponent) child;

  ngOnInit() {
    this.parentToChildMessage = 'Message from parent to child'
  }

  ngAfterViewInit() {
    // this.ViewChildMessage = this.child.randomMessage;
  }
  ngAfterContentInit() {
    this.ViewChildMessage = this.child.randomMessage;
  }
  receiveMessage($event) {
    this.receivedMessage = $event
  }
}
