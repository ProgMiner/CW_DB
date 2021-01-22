// import { useStore } from '../store';
// import { Cat } from '../models/cat';
// import { Food } from '../models/food';
<<<<<<< HEAD
//
=======

>>>>>>> e71addf8a893cb862295b40b852a5adf24750208

interface AddCatPreferenceParams {
    catId: number;
    foodId: number;
}

export const useAddCatPreference = () => {
    // const { dispatch } = useStore();

    return async ({ catId, foodId }: AddCatPreferenceParams) => {
        console.log({ catId, foodId });

        // return new Promise<Cat>(resolve => setTimeout(() => {
<<<<<<< HEAD
        //     const catPreference: Food = { id: foodId, name: 'testfood', allergens: [] };
        //
        //     // dispatch(store => ({ catPreferences: [catPreference, ...(store.catPreferences || [])], store }));
        //     // resolve(catPreference);
=======
            // const catPreference: Food = { id: foodId, name: 'testfood', allergens: [] };

            // dispatch(store => ({ catPreferences: [catPreference, ...(store.catPreferences || [])], store }));
            // resolve(catPreference);
>>>>>>> e71addf8a893cb862295b40b852a5adf24750208
        // }));
    };
};
