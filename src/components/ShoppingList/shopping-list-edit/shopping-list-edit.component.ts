import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../../services/shopping.service';

@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

	subscription: Subscription;
	editMode = false;
	editedItemIndex: number;
	editedItem: Ingredient;
	@ViewChild('form') shoppingForm: NgForm;

	constructor(private shopService: ShoppingListService) { }

	ngOnInit() {
		this.subscription = this.shopService.startedEditing.subscribe(
			(i: number) => {
				this.editedItemIndex = i;
				this.editMode = true;
				this.editedItem = this.shopService.getIngredient(i);
				this.shoppingForm.setValue({
					name: this.editedItem.name,
					amount: this.editedItem.amount
				});
			}
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	onSubmitIngredient(form: NgForm) {
		const value = form.value;
		const newIngredient = new Ingredient(value.name, value.amount);
		if (this.editMode) {
			this.shopService.updateIngredient(this.editedItemIndex, newIngredient);
		} else {
			this.shopService.addNewIngredient(newIngredient);
		}
		this.shoppingForm.reset();
		this.editMode = false;
	}

	onDeleteItem() {
		this.shopService.removeIngredient(this.editedItemIndex);
		this.onClearForm();
	}

	onClearSl() {
		this.shopService.clearShoppingList();
		this.onClearForm();
	}

	onClearForm() {
		this.shoppingForm.reset();
		this.editMode = false;
	}

}
