import { useStore } from '../store';
import { catsApi } from '../api/cats';


let loading = false;

export const useCats = () => {
    const { state: { cats }, dispatch } = useStore();

    if (!loading && cats === null) {
        loading = true;

        catsApi.getCats()
            .then(newCats => dispatch(store => store.cats = newCats))
            .catch(() => {});

        return null;
    }

    return cats;
};
