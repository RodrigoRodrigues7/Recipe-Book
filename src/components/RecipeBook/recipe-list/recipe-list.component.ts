import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipesList: Recipe[] = [];

	constructor(private recipeService: RecipeService,
					private router: Router,
					private route: ActivatedRoute) { }

	ngOnInit() {
		this.recipesList = this.recipeService.getRecipes();
	}

	onNewRecipe() {
		this.router.navigate(['new-recipe'], { relativeTo: this.route });
	}

}
