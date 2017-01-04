import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'panel',
	templateUrl: 'panel.component.html',
	styleUrls: ['panel.component.css']
})
export class PanelComponent {
	panelList: Array<string> = [
		'uno',
		'dos',
		'tres'
	];
}