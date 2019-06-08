import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from 'src/components/RecipeBook/recipes/recipes.component';
import { ShoppingListComponent } from 'src/components/shoppingList/shopping-list/shopping-list.component';

const appRoutes: Routes = [
   { path: '', redirectTo: '/recipes', pathMatch: 'full' },
   { path: 'recipes', component: RecipesComponent },
   { path: 'shopping-list', component: ShoppingListComponent },
]

@NgModule({
   imports: [
      RouterModule.forRoot(appRoutes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule {

}