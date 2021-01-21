import { doApiRequest } from './doApiRequest';
import { mapper } from './mapper';
import {Good} from '../models/good';

export const goodsApi = {

    getGoods: async (): Promise<Good[]> => {
        return mapper.toList('good', await doApiRequest('good'));
    },

    createGood: async (good: Good): Promise<Good> => {
        return mapper.to.good(await doApiRequest('good', {
            method: 'POST',
            body: JSON.stringify(mapper.from.good(good))
        }));
    }
};
