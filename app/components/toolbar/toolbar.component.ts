import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'toolbar',
	templateUrl: 'toolbar.component.html',
	styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
	@Input() title: string;
}