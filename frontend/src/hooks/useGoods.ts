import { useStore } from '../store';
import { Good } from '../models/good';
import {catsApi} from '../api/cats';
import {goodsApi} from '../api/goods';

let loading = false;

export const useGoods = () => {
    const { state: { goods }, dispatch } = useStore();

    if (!loading && goods === null) {
        loading = true;

        goodsApi.getGoods()
            .then(newGoods => dispatch(store => store.goods = newGoods))
            .catch(() => {});

        return null;
    }
    return goods;
};
