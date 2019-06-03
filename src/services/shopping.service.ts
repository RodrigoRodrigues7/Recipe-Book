import { EventEmitter } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShoppingListService {

   ingredientsChanged = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Pineapples', 7)
	];

   getIngredients() {
      return this.ingredients.slice();
   }

   addNewIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
   }

   addIngredientsFromRecipe(ingredients: Ingredient[]) {
      // for (let ingredient of ingredients) {
      //    this.addNewIngredient(ingredient);         
      // }
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
   }

}