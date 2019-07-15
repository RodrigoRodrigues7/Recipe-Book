import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from 'src/components/recipeBook/recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { AuthService } from './auth.service';
import { API_CONFIG } from 'src/app/api.config';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

	constructor(
		private http: HttpClient,
		private recipeService: RecipeService,
		private authService: AuthService
	) { }

	saveRecipes() {
		const recipes = this.recipeService.getRecipes();
		this.http.put(API_CONFIG.firebaseUrl, recipes).subscribe(res => { console.log(res) })
	};

	fetchRecipes() {
		return this.http.get<Recipe[]>(API_CONFIG.firebaseUrl).pipe(
			map(recipes => {
				return recipes.map(recipe => {
					// If any fetched recipe doesn't have ingredients than it will have a empty array of 'Ingredient'  
					return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
				})
			}), tap(recipes => { this.recipeService.setRecipes(recipes) })
		)
	};

}