import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { ShoppingListComponent } from '../components/shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from '../components/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailComponent } from '../components/recipeBook/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../components/recipeBook/recipe-item/recipe-item.component';
import { RecipeListComponent } from '../components/recipeBook/recipe-list/recipe-list.component';
import { RecipesComponent } from '../components/RecipeBook/recipes/recipes.component';
import { AuthComponent } from '../components/auth/auth.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

import { RecipeService } from 'src/services/recipe.service';
import { ShoppingListService } from 'src/services/shopping.service';
import { RecipeStartComponent } from '../components/RecipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../components/RecipeBook/recipe-edit/recipe-edit.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
