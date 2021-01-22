import { Cat } from '../models/cat';
import { doApiRequest } from './doApiRequest';
import { mapper } from './mapper';


export const catsApi = {

    getCats: async (): Promise<Cat[]> => {
        return mapper.toList('cat', await doApiRequest('cat'));
    },

    createCat: async (cat: Cat): Promise<Cat> => {
        return mapper.to.cat(await doApiRequest('cat', {
            method: 'POST',
            body: JSON.stringify(mapper.from.cat(cat))
        }));
    },

    addCatAllergen: async (catId: number, allergenId: number): Promise<Cat> => {
        return mapper.to.cat(await doApiRequest(`cat/${catId}/allergen`, {
            method: 'POST',
            body: String(allergenId)
        }));
    }
};
