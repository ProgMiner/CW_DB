import React, { useCallback, useContext, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';

import { Breed } from './models/breed';
import { Client } from './models/client';
import { Cat } from './models/cat';
import { Allergen } from './models/allergen';
import { Food } from './models/food';
import { Good } from './models/good';


export interface Store {
    cats: Cat[] | null;
    breeds: Breed[] | null;
    clients: Client[] | null;
    allergens: Allergen[] | null;
    food: Food[] | null;
    goods: Good[] | null;
}

interface StoreContext {
    state: Readonly<Store>;
    dispatch: (patch: (store: Store) => void) => void;
}

const initialState: Store = {
    cats: null,
    breeds: null,
    clients: null,
    allergens: null,
    food: null,
    goods: null,
};

const store = React.createContext<StoreContext>({
    state: initialState,
    dispatch: () => {}
});

export const StoreProvider: React.FC = ({ children }) => {
    const { Provider: BackingProvider } = store;

    const [state, origDispatch] = useState(initialState);

    const dispatch = useCallback((patch: (store: Store) => void) => {
        origDispatch(prevState => {
            const nextState = cloneDeep(prevState);

            patch(nextState);
            return nextState;
        });
    }, []);

    return (
        <BackingProvider value={{ state, dispatch }}>
            {children}
        </BackingProvider>
    );
};

export const useStore = () => useContext(store);
