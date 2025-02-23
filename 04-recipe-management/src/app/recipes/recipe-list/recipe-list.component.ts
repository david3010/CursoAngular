import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.loveandlemons.com/wp-content/uploads/2021/07/corn-recipes-2-580x580.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2021-02/khachapuri.jpg?itok=PGjSYSJk'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.ctfassets.net/uexfe9h31g3m/6F6XJqeQuirD60ckcR5KdB/0600991f7b19f20367309157b6de03f9/MeatballsPastaBake_1950x1300.jpg?w=768&h=512&fm=webp&fit=thumb&q=90')
  ];

}
