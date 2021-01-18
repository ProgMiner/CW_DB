import { useStore } from '../store';
import {CatPreference} from "../models/catPreference";
import {Cat} from "../models/cat";
import {Food} from "../models/food";

const catParams: Cat =  { id: 567, name: 'testcat', sex: "FEMALE", color: 788233};
const foodParams: Food = { id: 55, name: 'testfood'};

const testCatPreferences: CatPreference[] = [
    {
        cat: catParams,
        food: foodParams
    }
];

export const useCatPreferences = () => {
    const { state: { catPreferences }, dispatch } = useStore();

    if (!catPreferences) {
        setTimeout(() => dispatch(store => ({ catPreferences: testCatPreferences, ...store })));

        return { loading: true, catPreferences };
    }

    return { loading: false, catPreferences };
};
