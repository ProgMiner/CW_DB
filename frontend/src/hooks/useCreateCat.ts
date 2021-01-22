import { useCallback } from 'react';

import { useStore } from '../store';
import { catsApi } from '../api/cats';
import { Cat } from '../models/cat';


export const useCreateCat = () => {
    const { dispatch } = useStore();

    return useCallback(async (cat: Cat) => {
        const newCat = await catsApi.createCat(cat);

        dispatch(store => store.cats?.unshift(newCat));

        return newCat;
    }, [dispatch]);
};
