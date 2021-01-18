import { useStore } from '../store';
import {CatAllergen} from "../models/catAllergen";

interface CreateFoodAllergenParams {
    catId: number;
    allergenId?: number;
}

export const useCreateCatAllergen = () => {
    const { dispatch } = useStore();

    return async ({ catId, allergenId }: CreateFoodAllergenParams) => {
        console.log({ catId, allergenId });

        return new Promise<CatAllergen>(resolve => setTimeout(() => {
            const catAllergen: CatAllergen = {
                cat: { id: catId, name: 'testfood', sex: "FEMALE", color: 788233},
                allergen: { id: allergenId, name: 'testallergen'},};

            dispatch(store => ({ catAllergens: [catAllergen, ...(store.catAllergens || [])], store }));
            resolve(catAllergen);
        }));
    };
};
