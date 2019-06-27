import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataStorageService } from 'src/services/data-storage.service';
import { RecipeService } from 'src/services/recipe.service';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {

	constructor(
		private dataService: DataStorageService,
		private recipeService: RecipeService
	) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const recipes = this.recipeService.getRecipes();

		if (recipes.length === 0) {
			return this.dataService.fetchRecipes();
		} else {
			return recipes;
		}
	}

}