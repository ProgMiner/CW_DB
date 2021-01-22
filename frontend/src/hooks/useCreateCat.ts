import { useStore } from '../store';
import { Sex } from '../models/sex';
import { useCallback } from 'react';
import { catsApi } from '../api/cats';
import { Breed } from '../models/breed';


interface CreateCatParams {
    name: string;
    breed?: Breed;
    birthday?: Date;
    sex: Sex;
    color: number;
    ownerId?: number;
}

export const useCreateCat = () => {
    const { state: { clients }, dispatch } = useStore();

    return useCallback(async ({ name, breed, birthday, sex, color, ownerId }: CreateCatParams) => {
        console.log({ name, breed, birthday, sex, color, ownerId });

        const cat = await catsApi.createCat({
            name,
            breed,
            birthday,
            sex,
            color,
            owner: clients?.find(({ id }) => id === ownerId),
            allergens: [],
            preferences: []
        })

        dispatch(store => store.cats?.unshift(cat));

        return cat;
    }, [clients, dispatch]);
};
