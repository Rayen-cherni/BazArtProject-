import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeImg]'
})
export class ChangeImgDirective {
  @Input()
  sourceImg1: string;
  @Input()
  sourceImg2: string;
  

  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.change(this.sourceImg2);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.change(this.sourceImg1);
  }

  private change(source: string) {
    this.el.nativeElement.src = source;
  }

}
