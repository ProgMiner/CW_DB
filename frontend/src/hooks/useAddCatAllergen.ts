// import { useStore } from '../store';
// import { Allergen } from '../models/allergen';
// import { Cat } from '../models/cat';
<<<<<<< HEAD
//
=======

>>>>>>> e71addf8a893cb862295b40b852a5adf24750208

interface AddCatAllergenParams {
    catId: number;
    allergenId: number;
}

export const useAddCatAllergen = () => {
    // const { dispatch } = useStore();

    return async ({ catId, allergenId }: AddCatAllergenParams) => {
        console.log({ catId, allergenId });
<<<<<<< HEAD
        //
        // return new Promise<Cat | undefined>(resolve => setTimeout(() => {
        //     const allergen: Allergen = { id: allergenId, name: 'testallergen' };
        //
        //     // dispatch(store => ({ catAllergens: [catAllergen, ...(store.catAllergens || [])], store }));
        //     // resolve(catAllergen);
=======

        // return new Promise<Cat | undefined>(resolve => setTimeout(() => {
            // const allergen: Allergen = { id: allergenId, name: 'testallergen' };

            // dispatch(store => ({ catAllergens: [catAllergen, ...(store.catAllergens || [])], store }));
            // resolve(catAllergen);
>>>>>>> e71addf8a893cb862295b40b852a5adf24750208
        // }));
    };
};
