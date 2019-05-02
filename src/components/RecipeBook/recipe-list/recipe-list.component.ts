import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit { 
  
  recipesList: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg'),
    new Recipe('Another Test Recipe', 'This is funny', 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg'),
    new Recipe('Yet another Test Recipe', 'This is getting dull ...', 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_burgers_all-american-burger.jpg'),
  ];

  
  constructor() { }

  ngOnInit() {
  }
}
