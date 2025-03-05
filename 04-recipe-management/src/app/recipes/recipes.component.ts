import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  recipeSelected: Recipe;

  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected = recipe;
  }
}
