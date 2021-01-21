import { Breed } from '../models/breed';
import { doApiRequest } from './doApiRequest';
import { mapper } from './mapper';

export const breedsApi = {

    getBreeds: async (): Promise<Breed[]> => {
        return mapper.toList('breed', await doApiRequest('breed'));
    },

    createBreed: async (breed: Breed): Promise<Breed> => {
        return mapper.to.breed(await doApiRequest('breed', {
            method: 'POST',
            body: JSON.stringify(mapper.from.breed(breed))
        }));
    }
};
