import React from 'react';
import { BrowserRouter, SwitchProps } from 'react-router-dom';

import { StoreProvider } from '../store';


export interface AppProps {
    routes: React.ReactElement<SwitchProps>
}

export const App: React.FC<AppProps> = ({ routes }) => {
    return (
        <StoreProvider>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </StoreProvider>
    );
};
