import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from 'src/components/recipeBook/recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { API_CONFIG } from 'src/app/api.config';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

	constructor(
		private http: HttpClient,
		private recipeService: RecipeService,
	) { }

	saveRecipes() {
		const recipes = this.recipeService.getRecipes();
		this.http.put(API_CONFIG.firebaseUrl, recipes).subscribe(
			res => { console.log(res) }
		);
	}

	fetchRecipes() {
		this.http.get<Recipe[]>(API_CONFIG.firebaseUrl).subscribe(
			recipes => { this.recipeService.setRecipes(recipes); }
		);
	}

}