import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({ selector: '[appShadow]' })
export class ShadowDirective implements OnInit {
  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    let shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur} ${this.appShadow}`;
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadowStr);
    this.renderer.setStyle(this.el.nativeElement, 'padding', "10px")
  }
}