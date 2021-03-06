import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  TemplatePortal
} from '@angular/cdk/portal';
import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { PopoverRef } from '../popover-ref';

/**
 * Internal component that wraps user-provided popover content.
 */
@Component({
  selector: 'p1-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent extends BasePortalOutlet {
  @ViewChild(CdkPortalOutlet) portalOutlet: CdkPortalOutlet;

  attachComponentPortal<T>(
    componentPortal: ComponentPortal<any>
  ): ComponentRef<T> {
    console.dir(this.portalOutlet);
    return this.portalOutlet.attachComponentPortal(componentPortal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    console.dir(this.portalOutlet);

    return this.portalOutlet.attachTemplatePortal(portal);
  }
}
