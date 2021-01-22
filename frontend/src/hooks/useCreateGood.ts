import { useCallback } from 'react';

import { useStore } from '../store';
import { Good } from '../models/good';
import { goodsApi } from '../api/goods';


export const useCreateGood = () => {
    const { dispatch } = useStore();

    return useCallback(async (good: Good) => {
        const newGood = await goodsApi.createGood(good);

        dispatch(store => store.goods?.unshift(newGood));

        return newGood;
    }, [dispatch]);
};
