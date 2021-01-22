import { useStore } from '../store';
import { foodApi } from '../api/food';


let loading = false;

export const useFood = () => {
    const { state: { food }, dispatch } = useStore();

    if (!loading && food === null) {
        loading = true;

        foodApi.getFood()
            .then(newFood => dispatch(store => store.food = newFood))
            .catch(() => {});

        return null;
    }
    return food;
};
