import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'container',
	templateUrl: 'container.component.html',
	styleUrls: ['container.component.css']
})
export class ContainerComponent {
	containerList: Array<string> = [
		'one',
		'two',
		'three'
	];
}