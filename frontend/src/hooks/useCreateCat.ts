import { useStore } from '../store';
import { Cat } from '../models/cat';
import { Sex } from '../models/sex';


interface CreateCatParams {
    name: string;
    breedId?: number;
    birthday?: Date;
    sex: Sex;
    color: number;
    ownerId?: number;
}

export const useCreateCat = () => {
    const { dispatch } = useStore();

    return async ({ name, breedId, birthday, sex, color, ownerId }: CreateCatParams) => {
        console.log({ name, breedId, birthday, sex, color, ownerId });

        return new Promise<Cat>(resolve => setTimeout(() => {
            const cat: Cat = {
                id: 134134,
                name,
                breed: breedId === undefined ? undefined : { id: breedId, name: '1312', price: 414 },
                birthday,
                sex,
                color,
                owner: ownerId === undefined ? undefined : { id: ownerId, name: 'er2rt2', discount: 123 }
            };

            dispatch(store => ({ cats: [cat, ...(store.cats || [])], store }));
            resolve(cat);
        }));
    };
};
