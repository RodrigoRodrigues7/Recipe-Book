import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipesList: Recipe[] = [
		new Recipe('Hamburger', 'This is simply a test', 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg'),
		new Recipe('Another Hamburger', 'This is funny', 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg'),
		new Recipe('Yet another Hamburger', "As you can see I'm bored ...", 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg'),
	];

	@Output()
	recipeClicked = new EventEmitter<Recipe>();

	constructor() { }

	ngOnInit() {
	}

	onRecipeClicked(item: Recipe) {
		this.recipeClicked.emit(item);
	}

}
