import { useStore } from '../store';
import { Sex } from '../models/sex';
import { useCallback } from 'react';
import { catsApi } from '../api/cats';


interface CreateCatParams {
    name: string;
    breedId?: number;
    birthday?: Date;
    sex: Sex;
    color: number;
    ownerId?: number;
}

export const useCreateCat = () => {
    const { state: { breeds, clients }, dispatch } = useStore();

    return useCallback(async ({ name, breedId, birthday, sex, color, ownerId }: CreateCatParams) => {
        console.log({ name, breedId, birthday, sex, color, ownerId });

        const cat = await catsApi.createCat({
            name,
            breed: breeds?.find(({ id }) => id === breedId),
            birthday,
            sex,
            color,
            owner: clients?.find(({ id }) => id === ownerId),
            allergens: [],
            preferences: []
        })

        dispatch(store => store.cats?.unshift(cat));

        return cat;
    }, [breeds, clients, dispatch]);
};
