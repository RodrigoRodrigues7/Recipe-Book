import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

	@ViewChild('nameInput')
	nameInputRef: ElementRef;
	@ViewChild('amountInput')
	amountInputRef: ElementRef;

	@Output()
	addIngredient = new EventEmitter<Ingredient>();

	constructor() { }

	onAddIngredient() {
		const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
		this.addIngredient.emit(newIngredient);
	}

}
