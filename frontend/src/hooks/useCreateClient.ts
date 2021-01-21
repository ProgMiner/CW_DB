import { useStore } from '../store';
import { Client } from '../models/client';
import {useCallback} from 'react';
import {clientsApi} from '../api/clients';


interface CreateClientParams {
    name: string;
    discount: number;
}

export const useCreateClient = () => {
    const { dispatch } = useStore();

    return useCallback(async ({ name, discount }: CreateClientParams) => {
        console.log({ name, discount});

        const client = await clientsApi.createClient({
            name,
            discount
        })

        dispatch(store => store.clients?.unshift(client));

        return client;
    }, [dispatch]);
};
