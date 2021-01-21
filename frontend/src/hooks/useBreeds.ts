import { useStore } from '../store';
import { Breed } from '../models/breed';


const testBreeds: Breed[] = [
    { id: 1, name: 'oaoaoa', price: 213 }
];

export const useBreeds = () => {
    const { state: { breeds }, dispatch } = useStore();

    if (breeds === null) {
        // setTimeout(() => dispatch(store => ({ breeds: testBreeds, ...store })));

        return breeds;
    }

    return breeds;
};
