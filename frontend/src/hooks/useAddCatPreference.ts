// import { useStore } from '../store';
// import { Cat } from '../models/cat';
// import { Food } from '../models/food';
//

interface AddCatPreferenceParams {
    catId: number;
    foodId: number;
}

export const useAddCatPreference = () => {
    // const { dispatch } = useStore();

    return async ({ catId, foodId }: AddCatPreferenceParams) => {
        console.log({ catId, foodId });

        // return new Promise<Cat>(resolve => setTimeout(() => {
        //     const catPreference: Food = { id: foodId, name: 'testfood', allergens: [] };
        //
        //     // dispatch(store => ({ catPreferences: [catPreference, ...(store.catPreferences || [])], store }));
        //     // resolve(catPreference);
        // }));
    };
};
