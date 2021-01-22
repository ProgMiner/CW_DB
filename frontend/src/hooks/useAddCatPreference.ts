import { useStore } from '../store';
import { catsApi } from '../api/cats';

interface AddCatPreferenceParams {
    catId: number;
    foodId: number;
}

export const useAddCatPreference = () => {
    const { dispatch } = useStore();

    return async ({ catId, foodId }: AddCatPreferenceParams) => {
        const newCat = await catsApi.addCatPreference(catId, foodId);

        dispatch(store => store.cats![store.cats!.findIndex(cat => cat.id === newCat.id)] = newCat);

        return newCat;
    };
};
