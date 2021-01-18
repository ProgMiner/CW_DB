import { useStore } from '../store';
import {Allergen} from "../models/allergen";

const testAllergens: Allergen[] = [
    { id: 1, name: 'otttaoaoa'}
];

export const useAllergens = () => {
    const { state: { allergens }, dispatch } = useStore();

    if (!allergens) {
        setTimeout(() => dispatch(store => ({ allergens: testAllergens, ...store })));

        return { loading: true, allergens };
    }

    return { loading: false, allergens };
};
