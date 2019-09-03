import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'transparent');
  }

}
