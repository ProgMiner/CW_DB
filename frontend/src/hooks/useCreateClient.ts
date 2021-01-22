import { useCallback } from 'react';

import { useStore } from '../store';
import { clientsApi } from '../api/clients';
import { Client } from '../models/client';


export const useCreateClient = () => {
    const { dispatch } = useStore();

<<<<<<< HEAD
    return useCallback(async ({ name, discount }: CreateClientParams) => {
        console.log({ name, discount });

        const client = await clientsApi.createClient({
            name,
            discount
        });
=======
    return useCallback(async (client: Client) => {
        const newClient = await clientsApi.createClient(client);
>>>>>>> e71addf8a893cb862295b40b852a5adf24750208

        dispatch(store => store.clients?.unshift(newClient));

        return newClient;
    }, [dispatch]);
};
