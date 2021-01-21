import { useStore } from '../store';
import { Allergen } from '../models/allergen';
import {allergensApi} from '../api/allergens';


let loading = false;

export const useAllergens = () => {
    const { state: { allergens }, dispatch } = useStore();

    if (!loading && allergens === null) {
        loading = true;

        allergensApi.getAllergens()
            .then(newAllergens => dispatch(store => store.allergens = newAllergens))
            .catch(() => {});

        return null;
    }

    return allergens;
};
