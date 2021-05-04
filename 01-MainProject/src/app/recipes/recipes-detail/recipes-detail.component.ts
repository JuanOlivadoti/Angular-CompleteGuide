import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  toShoppingList(){
    this.recipeService.addToShoppingList(this.recipeDetail.ingredients);
  }
}
