import { doApiRequest } from './doApiRequest';
import { mapper } from './mapper';
import { Allergen } from '../models/allergen';


export const allergensApi = {

    getAllergens: async (): Promise<Allergen[]> => {
        return mapper.toList('allergen', await doApiRequest('allergen'));
    },

    createAllergen: async (allergen: Allergen): Promise<Allergen> => {
        return mapper.to.allergen(await doApiRequest('allergen', {
            method: 'POST',
            body: JSON.stringify(mapper.from.allergen(allergen))
        }));
    }
};
