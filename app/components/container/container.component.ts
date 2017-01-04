import { Component, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
	moduleId: module.id,
	selector: 'container',
	templateUrl: 'container.component.html',
	styleUrls: ['container.component.css']
})
export class ContainerComponent {
	@Input() list;
	message: string;

	constructor(private dragulaService: DragulaService) {

		dragulaService.dropModel.subscribe((value) => {
			this.onDrop(value.slice(1));
		});
  	}

  	private onDrop( args ): void {

  		let [e, eModel, target, source] = args;
  		let found = false;
  		for( let i in this.list ){
  			if( this.list[i].id == eModel.id ){
  				found = true;
  				break;
  			}
  		}

  		this.message = "Item '" + eModel.name + "' was ";

  		if( found ){
  			this.message += 'added.';
  		}
  		else{
  			this.message += 'removed.';
  		}

  		console.log(this.message);
  	}
}