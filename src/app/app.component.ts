import { Component, TemplateRef, ElementRef } from '@angular/core';

import { PopoverService } from './popover/popover.service';
import { PopoverRef } from './popover/popover-ref';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private popoverService: PopoverService) {}

  showPopover(target: HTMLElement): void {
    this.popoverService.open(ExampleComponent, target, {
        data: 'Foo'
      })
      .afterClosed()
      .subscribe(result => {
        console.log(`Closed with ${result}`);
      });
  }

  showPopoverCustomStyling(target: HTMLElement): void {
    this.popoverService.open(ExampleComponent, target, {
      data: 'Foo',
      backdropClass: 'custom-backdrop',
      panelClass: 'custom-panel',
      arrowSize: 35,
      arrowOffset: 45
    });
  }

  showPopoverWithTemplate(template: TemplateRef<any>, target: HTMLElement): void {
    this.popoverService.open(template, target, {
      data: 'Woehoe'
    });
  }
}
