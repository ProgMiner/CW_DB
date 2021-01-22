import { useCallback } from 'react';

import { useStore } from '../store';
import { goodsApi } from '../api/goods';
import { Good } from '../models/good';


export const useCreateGood = () => {
    const { dispatch } = useStore();

    return useCallback(async (good: Good) => {
        const newGood = await goodsApi.createGood(good);

        dispatch(store => store.goods?.unshift(newGood));

        return newGood;
    }, [dispatch]);
};
