import {Good} from "./good";

export interface Food {
    id?: number;
    name: string;
    good?: Good;
}
