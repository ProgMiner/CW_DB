import { Breed } from './breed';
import { Sex } from './sex';
import { Client } from './client';

export interface Cat {
    id?: number;
    name: string;
    breed?: Breed;
    birthday?: Date;
    sex: Sex;
    color: number;
    owner?: Client;
}
