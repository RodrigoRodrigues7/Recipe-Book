import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../../services/shopping.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

	ingredients: Ingredient[];
	private igChanged: Subscription;

	constructor(private shopService: ShoppingListService) { }

	ngOnInit() {
		this.ingredients = this.shopService.getIngredients();
		this.igChanged = this.shopService.ingredientsChanged.subscribe(
			(newIngredients: Ingredient[]) => { this.ingredients = newIngredients }
		);
	}

	ngOnDestroy() {
		this.igChanged.unsubscribe();
	}

	onEditItem(i: number) {
		this.shopService.startedEditing.next(i);
	}

}
