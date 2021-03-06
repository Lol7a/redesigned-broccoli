import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [
    `
      .list-group-item {
        display: inline-block;
      }
    `,
  ],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Input() index!: number;
}
