import { Component, OnInit, Inject, Optional } from '@angular/core';

import { POPOVER_DATA } from '../popover/popover.service';
import { PopoverRef } from '../popover/popover-ref';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  constructor(
    private popoverRef: PopoverRef<string>,
    @Optional() @Inject(POPOVER_DATA) public data?: any
  ) {}

  // closeManually(): void {
  //   this.popoverRef.close('Done');
  // }
}