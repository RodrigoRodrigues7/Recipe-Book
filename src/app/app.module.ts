import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { ShoppingListComponent } from '../components/shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from '../components/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailComponent } from '../components/recipeBook/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../components/recipeBook/recipe-item/recipe-item.component';
import { RecipeListComponent } from '../components/recipeBook/recipe-list/recipe-list.component';
import { RecipesComponent } from '../components/RecipeBook/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
