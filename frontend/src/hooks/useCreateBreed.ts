import { useStore } from '../store';
import { Breed } from '../models/breed';


interface CreateBreedParams {
    name: string;
    price: number;
}

export const useCreateBreed = () => {
    const { dispatch } = useStore();

    return async ({ name, price }: CreateBreedParams) => {
        console.log({ name, price });

        return new Promise<Breed>(resolve => setTimeout(() => {
            const breed: Breed = {
                id: 13414,
                name,
                price
            };

            dispatch(store => ({ breeds: [breed, ...(store.breeds || [])], ...store }));
            resolve(breed);
        }));
    };
};
