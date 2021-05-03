import { EventEmitter, Output } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
    @Output() selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is a description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
        new Recipe('Another test recipe', 'This is another description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-scotch-quails-eggs-5177019.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}