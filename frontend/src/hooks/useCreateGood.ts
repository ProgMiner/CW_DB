import { useStore } from '../store';
import {Good} from "../models/good";

interface CreateFoodParams {
    name: string;
    price: number;
    type: string;
}

export const useCreateGood = () => {
    const { dispatch } = useStore();

    return async ({ name, price, type }: CreateFoodParams) => {
        console.log({ name, price, type });

        return new Promise<Good>(resolve => setTimeout(() => {
            const good: Good = {
                id: 1367864,
                name,
                price,
                type}

            dispatch(store => ({ goods: [good, ...(store.goods || [])], store }));
            resolve(good);
        }));
    };
};
