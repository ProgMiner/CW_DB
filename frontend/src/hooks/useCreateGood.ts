import { useCallback } from 'react';

import { useStore } from '../store';
import { goodsApi } from '../api/goods';


export const useCreateGood = () => {
    const { dispatch } = useStore();

<<<<<<< HEAD
    return useCallback(async ({ name, price, type }: CreateGoodParams) => {
        console.log({ name, price, type });

        const good = await goodsApi.createGood({
            name,
            price,
            type
        });
=======
    return useCallback(async (good: Good) => {
        const newGood = await goodsApi.createGood(good);
>>>>>>> e71addf8a893cb862295b40b852a5adf24750208

        dispatch(store => store.goods?.unshift(newGood));

        return newGood;
    }, [dispatch]);
};
