import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	title: string = 'Angular 2 Drag n Drop';

	businessCapabilities: Array<Object> = [
		{id: 1, name: 'apples'},
		{id: 2, name: 'oranges'},
		{id: 3, name: 'bananas'},
		{id: 4, name: 'watermelon'},
		{id: 5, name: 'pineapple'},
		{id: 6, name: 'peaches'},
		{id: 7, name: 'pears'},
		{id: 8, name: 'kiwis'}
	];

	release1: Array<Object> = [];
	release2: Array<Object> = [];
	release3: Array<Object> = [];
}