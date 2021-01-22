import { useStore } from '../store';
import { Client } from '../models/client';
import { clientsApi } from '../api/clients';


let loading = false;

export const useClients = () => {
    const { state: { clients }, dispatch } = useStore();

    if (!loading && clients === null) {
        loading = true;

        clientsApi.getClients()
            .then(newClients => dispatch(store => store.clients = newClients))
            .catch(() => {});

        return null;
    }

    return clients;
};
