import { useStore } from '../store';
import { Cat } from '../models/cat';

const testCats: Cat[] = [
    { id: 1, name: 'oaoao', sex: 'FEMALE', color: 314315 }
];

export const useCats = () => {
    const { state: { cats }, dispatch } = useStore();

    if (!cats) {
        setTimeout(() => dispatch(store => ({ cats: testCats, ...store })));

        return { loading: true, cats };
    }

    return { loading: false, cats };
};
