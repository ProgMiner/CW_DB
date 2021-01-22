import { useCallback } from 'react';

import { useStore } from '../store';
import { breedsApi } from '../api/breeds';
<<<<<<< HEAD
=======
import { Breed } from '../models/breed';
>>>>>>> e71addf8a893cb862295b40b852a5adf24750208


export const useCreateBreed = () => {
    const { dispatch } = useStore();

<<<<<<< HEAD
    return useCallback(async ({ name, price }: CreateBreedParams) => {
        console.log({ name, price });

        const breed = await breedsApi.createBreed({
            name,
            price
        });
=======
    return useCallback(async (breed: Breed) => {
        const newBreed = await breedsApi.createBreed(breed);
>>>>>>> e71addf8a893cb862295b40b852a5adf24750208

        dispatch(store => store.breeds?.unshift(newBreed));

        return newBreed;
    }, [dispatch]);
};
