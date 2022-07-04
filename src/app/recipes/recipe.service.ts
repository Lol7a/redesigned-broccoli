import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Creamy Broccoli Vegan Pasta',
      'This luscious creamy vegan pasta will give any traditional mac and cheese a run for its money. Instead of containing dairy, the smooth, tangy sauce is a protein-packed blend of white beans, nutritional yeast, and lemon juice.',
      'https://www.loveandlemons.com/wp-content/uploads/2017/10/IMG_0042.jpg',
      [
        new Ingredient('White Beans', 1),
        new Ingredient('Lemon Juice', 3),
        new Ingredient('Olive Oil', 4),
        new Ingredient('Nutritional Yeast', 1),
        new Ingredient('Yellow Onion', 1),
        new Ingredient('Broccoli', 5),
        new Ingredient('Pine Nuts', 5),
        new Ingredient('Garlic Clove', 1),
      ]
    ),
    new Recipe(
      'Creamy Pasta Pomodoro',
      'This easy vegan pasta is basically everything I want to eat for dinner any night of the week! An easy creamy tomato sauce (just cashews+marinara!) coats a 50/50 mix of fresh veggies and floppy rigatoni noodles.',
      'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/IMG_17194-580x857.jpg',
      [
        new Ingredient('Extra-virgin Olive Oil', 1),
        new Ingredient('Finely Minced Shallot', 3),
        new Ingredient('Large Garlic Clove', 1),
        new Ingredient('Sea Salt', 1),
        new Ingredient('Black Pepper', 1),
        new Ingredient('Chopped Tomatoes', 1),
        new Ingredient('Balsamic Vinegar', 1),
        new Ingredient('Dried Oregano', 1),
        new Ingredient('Red Pepper Flakes', 1),
        new Ingredient('Rigatoni', 10),
        new Ingredient('Zucchini', 2),
        new Ingredient('Thyme Leaves', 2),
        new Ingredient('Cherry Tomatoes', 2),
        new Ingredient('Spinach', 6),
      ]
    ),
    new Recipe(
      'Best Vegan Pizza',
      'Who says you need cheese to make a crave-worthy pizza? This easy vegan pizza may be my all-time favorite! I top chewy homemade pizza dough with a lemony cashew cream sauce, a jumble of savory, spicy, crisp, and juicy veggies, and big handfuls of fresh basil',
      'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/IMG_14058-580x826.jpg',
      [
        new Ingredient('Broccoli', 1),
        new Ingredient('Cherry Tomatoes', 3),
        new Ingredient('Kernels', 1),
        new Ingredient('Red Onio', 1),
        new Ingredient('Jalapeno', 0.5),
        new Ingredient('Sun-dried Tomatoes', 4),
        new Ingredient('Extra-virgin Olive Oil', 1),
        new Ingredient('Pizza Dough', 1),
        new Ingredient('Basil', 1),
        new Ingredient('Thyme Leaves', 2),
        new Ingredient('Red Pepper Flakes', 1),
        new Ingredient('Sea Salt', 1),
        new Ingredient('Black Pepper', 1),
      ]
    ),
    new Recipe(
      'Vegan Meatballs',
      'Whether you stuff them into subs or pile them onto pasta, these savory, smoky vegan meatballs are guaranteed to be a hit.',
      'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/easy-vegan-recipes-580x829.jpg',
      [
        new Ingredient('White Beans', 1),
        new Ingredient('Lemon Juice', 3),
        new Ingredient('Olive Oil', 4),
        new Ingredient('Nutritional Yeast', 1),
        new Ingredient('Yellow Onion', 1),
        new Ingredient('Broccoli', 5),
        new Ingredient('Pine Nuts', 5),
        new Ingredient('Garlic Clove', 1),
      ]
    ),
    new Recipe(
      'Cream of Mushroom Soup',
      'This homemade cream of mushroom soup is too good to hide inside any casserole! Instead of nuts or dairy, its super creamy texture comes from blended cauliflower.',
      'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/IMG_14558-2-cropped-580x843.jpg',
      [
        new Ingredient('White Beans', 1),
        new Ingredient('Lemon Juice', 3),
        new Ingredient('Olive Oil', 4),
        new Ingredient('Nutritional Yeast', 1),
        new Ingredient('Yellow Onion', 1),
        new Ingredient('Broccoli', 5),
        new Ingredient('Pine Nuts', 5),
        new Ingredient('Garlic Clove', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
