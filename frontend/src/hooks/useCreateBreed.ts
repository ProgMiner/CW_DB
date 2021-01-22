import { useCallback } from 'react';

import { useStore } from '../store';
import { breedsApi } from '../api/breeds';
import { Breed } from '../models/breed';


export const useCreateBreed = () => {
    const { dispatch } = useStore();

    return useCallback(async (breed: Breed) => {
        const newBreed = await breedsApi.createBreed(breed);

        dispatch(store => store.breeds?.unshift(newBreed));

        return newBreed;
    }, [dispatch]);
};
