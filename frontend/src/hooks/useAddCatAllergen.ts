import { useStore } from '../store';
import { Allergen } from '../models/allergen';
import { Cat } from '../models/cat';


interface AddCatAllergenParams {
    catId: number;
    allergenId: number;
}

export const useAddCatAllergen = () => {
    const { dispatch } = useStore();

    return async ({ catId, allergenId }: AddCatAllergenParams) => {
        console.log({ catId, allergenId });

        return new Promise<Cat | undefined>(resolve => setTimeout(() => {
            const allergen: Allergen = { id: allergenId, name: 'testallergen' };

            // dispatch(store => ({ catAllergens: [catAllergen, ...(store.catAllergens || [])], store }));
            // resolve(catAllergen);
        }));
    };
};
