import { EventEmitter, Injectable, Output } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    @Output() selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'This is a description',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
            [
                new Ingredient('Meat', 10),
                new Ingredient('Onion', 5)
            ]
        ),
        new Recipe(
            'Another test recipe',
            'This is another description',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-scotch-quails-eggs-5177019.jpg',
            [
                new Ingredient('Chicken', 20),
                new Ingredient('Carrot', 15)
            ]
        )
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredientsFromRecipe(ingredients);
    }
}