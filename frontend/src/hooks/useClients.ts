import { useStore } from '../store';
import { Client } from '../models/client';

const testClients: Client[] = [
    { id: 1, name: 'oaoaoa', discount: 213 }
];

export const useClients = () => {
    const { state: { clients }, dispatch } = useStore();

    if (!clients) {
        setTimeout(() => dispatch(store => ({ clients: testClients, ...store })));

        return { loading: true, clients };
    }

    return { loading: false, clients };
};