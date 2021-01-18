import {Food} from "./food";
import {Allergen} from "./allergen";

export interface FoodAllergen {
    food: Food;
    allergen: Allergen;
}
