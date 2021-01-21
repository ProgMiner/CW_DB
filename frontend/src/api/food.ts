import { doApiRequest } from './doApiRequest';
import { mapper } from './mapper';
import {Food} from '../models/food';

export const foodApi = {

    getFood: async (): Promise<Food[]> => {
        return mapper.toList('food', await doApiRequest('food'));
    },

    createFood: async (food: Food): Promise<Food> => {
        return mapper.to.food(await doApiRequest('food', {
            method: 'POST',
            body: JSON.stringify(mapper.from.food(food))
        }));
    }
};
