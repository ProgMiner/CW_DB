import { useStore } from '../store';
import {FoodAllergen} from "../models/foodAllergen";

interface CreateFoodAllergenParams {
    foodId: number;
    allergenId?: number;
}

export const useCreateFoodAllergen = () => {
    const { dispatch } = useStore();

    return async ({ foodId, allergenId }: CreateFoodAllergenParams) => {
        console.log({ foodId, allergenId });

        return new Promise<FoodAllergen>(resolve => setTimeout(() => {
            const foodAllergen: FoodAllergen = {
                food: { id: foodId, name: 'testfood'},
                allergen: { id: allergenId, name: 'testallergen'},};

            dispatch(store => ({ foodAllergens: [foodAllergen, ...(store.foodAllergens || [])], store }));
            resolve(foodAllergen);
        }));
    };
};
