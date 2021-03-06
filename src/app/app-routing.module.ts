import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from 'src/components/RecipeBook/recipes/recipes.component';
import { RecipeDetailComponent } from 'src/components/recipeBook/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from 'src/components/RecipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from 'src/components/RecipeBook/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from 'src/components/shoppingList/shopping-list/shopping-list.component';
import { AuthComponent } from 'src/components/auth/auth.component';

import { RecipeResolverService } from 'src/components/RecipeBook/recipes/recipe-resolver.service';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{
		path: 'recipes', component: RecipesComponent, children: [
			{ path: '', component: RecipeStartComponent },
			{ path: 'new-recipe', component: RecipeEditComponent },
			{ path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService] },
			{ path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] },
		]
	},
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'authentication', component: AuthComponent },
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