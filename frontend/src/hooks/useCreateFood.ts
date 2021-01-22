import { useCallback } from 'react';

import { useStore } from '../store';
import { Food } from '../models/food';
import { foodApi } from '../api/food';


interface CreateFoodParams {
    name: string;
    goodId?: number;
}

export const useCreateFood = () => {
    const { state: { goods }, dispatch } = useStore();

    return useCallback(async ({ name, goodId }: CreateFoodParams) => {
        console.log({ name, goodId });

        const food = await foodApi.createFood({
            name,
            good: goods?.find(({ id }) => id === goodId),
            allergens: []
        })

        dispatch(store => store.food?.unshift(food));

        return food;
    }, [goods, dispatch]);
};
