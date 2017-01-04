import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent }  from './app.component';
import {
	ContainerComponent,
	PanelComponent,
	ToolbarComponent
} from './components/index';

@NgModule({
	imports:      [ BrowserModule, DragulaModule ],
	declarations: [ AppComponent, ContainerComponent, PanelComponent, ToolbarComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }