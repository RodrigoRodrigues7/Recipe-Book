import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

	subcription: Subscription;
	recipesList: Recipe[] = [];

	constructor(private recipeService: RecipeService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.subcription = this.recipeService.recipesChanged.subscribe(
			(recipes: Recipe[]) => { this.recipesList = recipes }
		);
		this.recipesList = this.recipeService.getRecipes();
	}

	ngOnDestroy() {
		this.subcription.unsubscribe();
	}

	onNewRecipe() {
		this.router.navigate(['new-recipe'], { relativeTo: this.route });
	}

}
