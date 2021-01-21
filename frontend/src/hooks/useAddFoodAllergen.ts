import { useStore } from '../store';
import { Food } from '../models/food';
import { Allergen } from '../models/allergen';


interface AddFoodAllergenParams {
    foodId: number;
    allergenId: number;
}

export const useAddFoodAllergen = () => {
    const { dispatch } = useStore();

    return async ({ foodId, allergenId }: AddFoodAllergenParams) => {
        console.log({ foodId, allergenId });

        return new Promise<Food | undefined>(resolve => setTimeout(() => {
            const foodAllergen: Allergen = { id: allergenId, name: 'testallergen' };

            // dispatch(store => ({ foodAllergens: [foodAllergen, ...(store.foodAllergens || [])], ...store }));
            // resolve(foodAllergen);
        }));
    };
};
