import { useStore } from '../store';
import { Allergen } from '../models/allergen';


interface CreateAllergenParams {
    name: string;
}

export const useCreateAllergen = () => {
    const { dispatch } = useStore();

    return async ({ name }: CreateAllergenParams) => {
        console.log({ name });

        return new Promise<Allergen>(resolve => setTimeout(() => {
            const allergen: Allergen = {
                id: 114,
                name
            };

            dispatch(store => ({ allergens: [allergen, ...(store.allergens || [])], ...store }));
            resolve(allergen);
        }));
    };
};
