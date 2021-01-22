import { useCallback } from 'react';

import { useStore } from '../store';
import { allergensApi } from '../api/allergens';


interface CreateAllergenParams {
    name: string;
}

export const useCreateAllergen = () => {
    const { dispatch } = useStore();

    return useCallback(async ({ name }: CreateAllergenParams) => {
        console.log({ name });

        const allergen = await allergensApi.createAllergen({
            name
        });

        dispatch(store => store.allergens?.unshift(allergen));

        return allergen;
    }, [dispatch]);
};
