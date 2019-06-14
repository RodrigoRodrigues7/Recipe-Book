import { Subject } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShoppingListService {

   ingredientsChanged = new Subject<Ingredient[]>();
   startedEditing = new Subject<number>();

   private ingredients: Ingredient[] = [
		new Ingredient('Apples', 2),
		new Ingredient('Pineapples', 7)
	];

   getIngredients() {
      return this.ingredients.slice();
   }

   getIngredient(index: number) {
      return this.ingredients[index];
   }

   addNewIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
   }

   addIngredientsFromRecipe(ingredients: Ingredient[]) {
      // for (let ingredient of ingredients) {
      //    this.addNewIngredient(ingredient);         
      // }
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
   }

}