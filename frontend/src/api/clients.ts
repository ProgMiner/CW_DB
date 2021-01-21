import { doApiRequest } from './doApiRequest';
import { mapper } from './mapper';
import {Client} from '../models/client';

export const clientsApi = {

    getClients: async (): Promise<Client[]> => {
        return mapper.toList('client', await doApiRequest('client'));
    },

    createClient: async (client: Client): Promise<Client> => {
        return mapper.to.client(await doApiRequest('client', {
            method: 'POST',
            body: JSON.stringify(mapper.from.client(client))
        }));
    }
};
