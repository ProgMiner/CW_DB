import { Good } from './good';
import { Allergen } from './allergen';


export interface Food {
    id?: number;
    name: string;
    good?: Good;
    allergens: Allergen[];
}
