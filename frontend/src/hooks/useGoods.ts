import { useStore } from '../store';
import { Good } from '../models/good';

const testGood: Good[] = [
    { id: 1, name: 'oaoaoa', price: 213, type: 'test' }
];

export const useGoods = () => {
    const { state: { goods }, dispatch } = useStore();

    if (!goods) {
        setTimeout(() => dispatch(store => ({ goods: testGood, ...store })));

        return { loading: true, goods };
    }

    return { loading: false, goods };
};
