import { useStore } from '../store';
import { Food } from '../models/food';

const testFood: Food[] = [
    { id: 1, name: 'oaoaoa' }
];

export const useFood = () => {
    const { state: { food }, dispatch } = useStore();

    if (!food) {
        setTimeout(() => dispatch(store => ({ food: testFood, ...store })));

        return { loading: true, food };
    }

    return { loading: false, food };
};
