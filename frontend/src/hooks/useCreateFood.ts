import { useStore } from '../store';
import { Food } from '../models/food';


interface CreateFoodParams {
    name: string;
    goodId?: number;
}

export const useCreateFood = () => {
    const { dispatch } = useStore();

    return async ({ name, goodId }: CreateFoodParams) => {
        console.log({ name, goodId });

        return new Promise<Food>(resolve => setTimeout(() => {
            const food: Food = {
                id: 134,
                name,
                good: goodId === undefined ? undefined : { id: goodId, name: 'ytyyt', price: 414, type: 'test' },
                allergens: []
            };

            dispatch(store => ({ food: [food, ...(store.food || [])], ...store }));
            resolve(food);
        }));
    };
};
