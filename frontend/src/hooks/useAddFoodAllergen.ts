// import { useStore } from '../store';
// import { Food } from '../models/food';
// import { Allergen } from '../models/allergen';
<<<<<<< HEAD
//
=======

>>>>>>> e71addf8a893cb862295b40b852a5adf24750208

interface AddFoodAllergenParams {
    foodId: number;
    allergenId: number;
}

export const useAddFoodAllergen = () => {
    // const { dispatch } = useStore();

    return async ({ foodId, allergenId }: AddFoodAllergenParams) => {
        console.log({ foodId, allergenId });

        // return new Promise<Food | undefined>(resolve => setTimeout(() => {
<<<<<<< HEAD
        //     const foodAllergen: Allergen = { id: allergenId, name: 'testallergen' };
        //
        //     // dispatch(store => ({ foodAllergens: [foodAllergen, ...(store.foodAllergens || [])], ...store }));
        //     // resolve(foodAllergen);
=======
            // const foodAllergen: Allergen = { id: allergenId, name: 'testallergen' };

            // dispatch(store => ({ foodAllergens: [foodAllergen, ...(store.foodAllergens || [])], ...store }));
            // resolve(foodAllergen);
>>>>>>> e71addf8a893cb862295b40b852a5adf24750208
        // }));
    };
};
