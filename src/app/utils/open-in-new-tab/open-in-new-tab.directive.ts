import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[openInNewTab]'
})
export class OpenInNewTabDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    var target = event.target || event.srcElement;
    if(target instanceof HTMLAnchorElement) {
      window.open(target.href);
    }
  }

}
