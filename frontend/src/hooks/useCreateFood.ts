import { useCallback } from 'react';

import { useStore } from '../store';
import { foodApi } from '../api/food';
import { Food } from '../models/food';


export const useCreateFood = () => {
    const { dispatch } = useStore();

    return useCallback(async (food: Food) => {
        const newFood = await foodApi.createFood(food);

        dispatch(store => store.food?.unshift(newFood));

        return newFood;
    }, [dispatch]);
};
