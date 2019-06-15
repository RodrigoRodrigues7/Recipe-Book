import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from 'src/components/recipeBook/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping.service';

@Injectable()
export class RecipeService {

	recipesChanged = new Subject<Recipe[]>();

	private recipesList: Recipe[] = [
		new Recipe(
			'Hamburger with Fries',
			'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg',
			'Big Fat Hamburger with French Fries',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1),
				new Ingredient('Lettuce', 2),
				new Ingredient('Sliced Onion', 4),
				new Ingredient('Freach Fries', 20)
			]),
		new Recipe(
			'Another Hamburger',
			'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg',
			'This is funny',
			[]),
		new Recipe(
			'Yet another Hamburger',
			'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg',
			"As you can see I'm bored ...", 
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

	addRecipe(recipe: Recipe) {
		this.recipesList.push(recipe);
		this.recipesChanged.next(this.recipesList.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipesList[index] = newRecipe;
		this.recipesChanged.next(this.recipesList.slice());
	}

	deleteRecipe(index: number) {
		this.recipesList.splice(index, 1);
		this.recipesChanged.next(this.recipesList.slice());
	}

}
