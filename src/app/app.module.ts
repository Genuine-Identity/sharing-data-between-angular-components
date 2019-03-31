import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShadowDirective } from './shadow.directive';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';  
import { Sibling2Component } from './sibling2/sibling2.component'; 
import { DataService } from './data.service'; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ShadowDirective,
    ChildComponent,
    SiblingComponent,
    Sibling2Component
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [DataService]
})
export class AppModule { }
