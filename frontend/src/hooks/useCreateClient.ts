import { useCallback } from 'react';

import { useStore } from '../store';
import { clientsApi } from '../api/clients';
import { Client } from '../models/client';


export const useCreateClient = () => {
    const { dispatch } = useStore();

    return useCallback(async (client: Client) => {
        const newClient = await clientsApi.createClient(client);

        dispatch(store => store.clients?.unshift(newClient));

        return newClient;
    }, [dispatch]);
};
