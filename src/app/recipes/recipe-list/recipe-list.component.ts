import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Warren Recipe",
      "Warrens Best Pie",
      "../../../assets/1.jpg"
      // "https://www.shutterstock.com/image-photo/fall-traditional-pies-pumpkin-pecan-apple-735091189"
    ),
    new Recipe("Warren Recipe", "Warrens Best Pie", "../../../assets/1.jpg")
  ];

  constructor() {}

  ngOnInit(): void {}
}
