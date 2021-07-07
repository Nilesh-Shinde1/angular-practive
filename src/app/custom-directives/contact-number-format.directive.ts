import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appContactNumberFormat]'
})
export class ContactNumberFormatDirective {
  constructor(private el:ElementRef) { }

  @HostListener("blur") onBlur(){
      let value:string = this.el.nativeElement.value;
      this.el.nativeElement.value = "(" + value.substr(0, 3) + ")" + value.substr(3, 3) + "-" + value.substr(6, 4);
  }

}
