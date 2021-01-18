import {Food} from "./food";
import {Allergen} from "./allergen";
import {Cat} from "./cat";

export interface CatAllergen {
    cat: Cat;
    allergen: Allergen;
}
