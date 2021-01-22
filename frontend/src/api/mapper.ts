import { Cat } from '../models/cat';
import { Breed } from '../models/breed';
import { Client } from '../models/client';
import { Food } from '../models/food';
import { Allergen } from '../models/allergen';
import { Sex } from '../models/sex';
import { ApiError } from './apiError';
import { Good } from '../models/good';


interface Models {
    cat: Cat;
    breed: Breed;
    client: Client;
    food: Food;
    good: Good;
    allergen: Allergen;
}

interface Mapper {
    to: { [K in keyof Models]: (value: unknown) => Models[K] };
    from: { [K in keyof Models]: (value: Models[K]) => unknown };
    toList: <K extends keyof Models>(mapper: K, value: unknown) => Models[K][];
}

const assertObject = <T>(mapper: (value: Record<string, unknown>) => T) => {
    return (value: unknown) => {
        if (typeof value !== 'object' || value === null) {
            throw new ApiError('NOT_AN_OBJECT');
        }

        return mapper(value as Record<string, unknown>);
    };
};

export const mapper: Mapper = {
    to: {
        cat: assertObject(({ id, name, breed, birthday, sex, color, owner }) => ({
            id: id as number,
            name: name as string,
            breed: breed ? mapper.to.breed(breed) : undefined,
            birthday: birthday ? new Date(birthday as string) : undefined,
            sex: sex as Sex,
            color: color as number,
            owner: owner ? mapper.to.client(owner) : undefined,
            allergens: [],
            preferences: []
        })),
        breed: assertObject(breed => breed as unknown as Breed),
        client: assertObject(client => client as unknown as Client),
        food: assertObject(({ id, name, good }) => ({
            id: id as number,
            name: name as string,
            good: good ? mapper.to.good(good) : undefined,
            allergens: []
        })),
        good: assertObject(good => good as unknown as Good),
        allergen: assertObject(allergen => allergen as unknown as Allergen)
    },
    from: {
        cat: ({ id, name, breed, birthday, sex, color, owner, preferences, allergens }) => ({
            id,
            name,
            breed: breed ? mapper.from.breed(breed) : null,
            birthday: birthday?.toISOString(),
            sex,
            color,
            owner: owner ? mapper.from.client(owner) : null,
            preferences: preferences.map(mapper.from.food),
            allergens: allergens.map(mapper.from.allergen)
        }),
        breed: breed => breed,
        client: client => client,
        food: ({ id, name, good, allergens }) => ({
            id,
            name,
            good: good ? mapper.from.good(good) : null,
            allergens: allergens.map(mapper.from.allergen)
        }),
        good: good => good,
        allergen: allergen => allergen
    },

    toList: <K extends keyof Models>(mapperType: K, value: unknown): Models[K][] => {
        if (!Array.isArray(value)) {
            throw new ApiError('NOT_AN_ARRAY');
        }

        const mapperFunction = mapper.to[mapperType as K] as (value: unknown) => Models[K];
        return value.map(mapperFunction);
    }
};
