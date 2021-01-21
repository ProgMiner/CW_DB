import { useStore } from '../store';
import { Client } from '../models/client';


interface CreateClientParams {
    name: string;
    discount: number;
}

export const useCreateClient = () => {
    const { dispatch } = useStore();

    return async ({ name, discount }: CreateClientParams) => {
        console.log({ name, discount: discount });

        return new Promise<Client>(resolve => setTimeout(() => {
            const client: Client = {
                id: 13414,
                name,
                discount: discount
            };

            dispatch(store => ({ clients: [client, ...(store.clients || [])], ...store }));
            resolve(client);
        }));
    };
};
