import { useStore } from '../store';
import { breedsApi } from '../api/breeds';


let loading = false;

export const useBreeds = () => {
    const { state: { breeds }, dispatch } = useStore();

    if (!loading && breeds === null) {
        loading = true;

        breedsApi.getBreeds()
            .then(newBreeds => dispatch(store => store.breeds = newBreeds))
            .catch(() => {});

        return null;
    }

    return breeds;
};
