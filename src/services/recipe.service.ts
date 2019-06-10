import { Injectable } from '@angular/core';

import { Recipe } from 'src/components/recipeBook/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping.service';

@Injectable()
export class RecipeService {

	private recipesList: Recipe[] = [
		new Recipe(
			'Hamburger with Fries', 
			'Big Fat Hamburger with French Fries', 
			'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1),
				new Ingredient('Lettuce', 2),
				new Ingredient('Sliced Onion', 4),
				new Ingredient('Freach Fries', 20)
			]),
		new Recipe(
			'Another Hamburger', 
			'This is funny', 
			'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg',
			[]),
		new Recipe(
			'Yet another Hamburger', 
			"As you can see I'm bored ...", 
			'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg',
			[]),
	];

	constructor(private shopService: ShoppingListService) { }

	getRecipes() {
		return this.recipesList.slice();
	}

	getRecipe(index: number) {
		return this.recipesList.slice()[index];
	}

	sentIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shopService.addIngredientsFromRecipe(ingredients);
	}

}
