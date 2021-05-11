import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { PopoverModule } from './popover/popover.module';

@NgModule({
  imports:      [ BrowserModule, PopoverModule ],
  declarations: [ AppComponent, ExampleComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ExampleComponent]
})
export class AppModule { }
