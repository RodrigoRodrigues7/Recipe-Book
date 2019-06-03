import { EventEmitter } from '@angular/core';

import { Recipe } from 'src/components/recipeBook/recipes/recipe.model';

export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipesList: Recipe[] = [
		new Recipe('Hamburger', 'This is simply a test', 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg'),
		new Recipe('Another Hamburger', 'This is funny', 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg'),
		new Recipe('Yet another Hamburger', "As you can see I'm bored ...", 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg'),
	];

	getRecipes() {
		return this.recipesList.slice();
	}

}
