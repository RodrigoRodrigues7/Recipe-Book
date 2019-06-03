import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../../services/shopping.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

	ingredients: Ingredient[];

	constructor(private shopService: ShoppingListService) { }

	ngOnInit() {
		this.ingredients = this.shopService.getIngredients();
		this.shopService.ingredientsChanged.subscribe(
			(newIngredients: Ingredient[]) => { this.ingredients = newIngredients }
		);
	}

}
