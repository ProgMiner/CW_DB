import { doApiRequest } from './doApiRequest';
import { mapper } from './mapper';
import { Breed } from '../models/breed';

export const breedsApi = {

    getBreeds: async (): Promise<Breed[]> => {
        return mapper.toList('breed', await doApiRequest('cat/breed'));
    },

    createBreed: async (breed: Breed): Promise<Breed> => {
        return mapper.to.breed(await doApiRequest('cat/breed', {
            method: 'POST',
            body: JSON.stringify(mapper.from.breed(breed))
        }));
    }
};
