import { useStore } from '../store';
import {CatPreference} from "../models/catPreference";

interface CreateCatPreferenceParams {
    catId: number;
    foodId?: number;
}

export const useCreateCatPreference = () => {
    const { dispatch } = useStore();

    return async ({ catId, foodId }: CreateCatPreferenceParams) => {
        console.log({ catId, foodId });

        return new Promise<CatPreference>(resolve => setTimeout(() => {
            const catPreference: CatPreference = {
                cat: { id: catId, name: 'testfood', sex: "FEMALE", color: 788233},
                food: { id: foodId, name: 'testfood'},};

            dispatch(store => ({ catPreferences: [catPreference, ...(store.catPreferences || [])], store }));
            resolve(catPreference);
        }));
    };
};
