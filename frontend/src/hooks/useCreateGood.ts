import { useCallback } from 'react';

import { useStore } from '../store';
import { Good } from '../models/good';
import { goodsApi } from '../api/goods';


interface CreateGoodParams {
    name: string;
    price: number;
    type: string;
}

export const useCreateGood = () => {
    const { dispatch } = useStore();

    return useCallback(async ({ name, price, type }: CreateGoodParams) => {
        console.log({ name, price, type });

        const good = await goodsApi.createGood({
            name,
            price,
            type
        })

        dispatch(store => store.goods?.unshift(good));

        return good;
    }, [dispatch]);
};
