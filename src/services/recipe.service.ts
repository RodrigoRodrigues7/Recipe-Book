import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from 'src/components/recipeBook/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping.service';

@Injectable()
export class RecipeService {

	recipesChanged = new Subject<Recipe[]>();

	/*private recipesList: Recipe[] = [
		new Recipe(
			'Hamburger with Fries',
			'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg',
			'Big Fat Hamburger with French Fries.',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1),
				new Ingredient('Lettuce', 2),
				new Ingredient('Sliced Onion', 4),
				new Ingredient('Freach Fries', 20)
			]),
		new Recipe(
			'Shrimp Soup',
			'https://www.lemonblossoms.com/wp-content/uploads/2018/09/Coconut-Curry-Soup-with-Shrimp-S1.jpg',
			'A Tasty and Healthy Soup using Shrimps.',
			[
				new Ingredient('Uncooked Basmati Rice', 1),
				new Ingredient('Cloves Garlic', 3),
				new Ingredient('Peeled and Deveined Shrimp', 13),
				new Ingredient('Unsalted Butter', 2),
				new Ingredient('Freshly Grated Ginger', 1),
				new Ingredient('Red Curry Paste', 2)
			]),
		new Recipe(
			'German Schnitzel',
			'https://www.daringgourmet.com/wp-content/uploads/2018/01/Jagerschnitzel-8-cropped.jpg',
			"A Super-tasty Schnitzel - Just Awesome!", 
			[
				new Ingredient('Boneless Pork Chops', 2),
				new Ingredient('Garlic Salt', 1),
				new Ingredient('Large Eggs', 3),
				new Ingredient('All-purpose Flour', 1),
				new Ingredient('Panko Bread Crumbs', 2),
				new Ingredient('Paprika', 1),
			]),
	];*/

	private recipesList: Recipe[] = []

	constructor(private shopService: ShoppingListService) { }

	setRecipes(recipes: Recipe[]) {
		this.recipesList = recipes;
		this.recipesChanged.next(this.recipesList.slice());
	}

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
