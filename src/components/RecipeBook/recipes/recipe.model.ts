import { Ingredient } from '../../../app/shared/ingredient.model';

export class Recipe {

    public name: string;
    public imagePath: string;
    public description: string;
    public ingredients: Ingredient[];

    constructor(name: string, imgPath: string, desc: string, ingredients: Ingredient[]) {
        this.name = name;
        this.imagePath = imgPath;
        this.description = desc;
        this.ingredients = ingredients;
    }

}