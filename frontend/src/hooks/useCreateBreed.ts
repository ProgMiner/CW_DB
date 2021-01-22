import { useCallback } from 'react';

import { useStore } from '../store';
import { breedsApi } from '../api/breeds'


interface CreateBreedParams {
    name: string;
    price: number;
}

export const useCreateBreed = () => {
    const { dispatch } = useStore();

    return useCallback(async ({ name, price }: CreateBreedParams) => {
        console.log({ name, price });

        const breed = await breedsApi.createBreed({
            name,
            price
        })

        dispatch(store => store.breeds?.unshift(breed));

        return breed;
    }, [dispatch]);
};
