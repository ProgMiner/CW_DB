import React, { useContext, useState } from 'react';

import { Breed } from './models/breed';
import { Client } from './models/client';
import { Cat } from './models/cat';

export interface Store {
    cats?: Cat[];
    breeds?: Breed[];
    clients?: Client[];
}

interface StoreContext {
    state: Store;
    dispatch: (patch: (store: Store) => Store) => void;
}

const initialState = {};
const store = React.createContext<StoreContext>({ state: initialState, dispatch: () => {} });

export const StoreProvider: React.FC = ({ children }) => {
    const { Provider: BackingProvider } = store;

    const [state, dispatch] = useState(initialState);

    return (
        <BackingProvider value={{ state, dispatch }}>
            {children}
        </BackingProvider>
    );
};

export const useStore = () => useContext(store);
