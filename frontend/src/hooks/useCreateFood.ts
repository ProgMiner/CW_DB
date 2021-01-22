import { useCallback } from 'react';

import { useStore } from '../store';
import { foodApi } from '../api/food';


export const useCreateFood = () => {
    const { dispatch } = useStore();

<<<<<<< HEAD
        const food = await foodApi.createFood({
            name,
            good: goods?.find(({ id }) => id === goodId),
            allergens: []
        });
=======
    return useCallback(async (food: Food) => {
        const newFood = await foodApi.createFood(food);
>>>>>>> e71addf8a893cb862295b40b852a5adf24750208

        dispatch(store => store.food?.unshift(newFood));

        return newFood;
    }, [dispatch]);
};
