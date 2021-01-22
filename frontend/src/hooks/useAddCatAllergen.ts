import { useStore } from '../store';
import { catsApi } from '../api/cats';


interface AddCatAllergenParams {
    catId: number;
    allergenId: number;
}

export const useAddCatAllergen = () => {
    const { dispatch } = useStore();

    return async ({ catId, allergenId }: AddCatAllergenParams) => {
        const newCat = await catsApi.addCatAllergen(catId, allergenId);

        dispatch(store => store.cats![store.cats!.findIndex(cat => cat.id === newCat.id)] = newCat);

        return newCat;
    };
};
