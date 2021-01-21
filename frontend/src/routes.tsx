import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CatsPage } from './pages/CatsPage/CatsPage';
import { BreedsPage } from './pages/BreedsPage/BreedsPage';
import { ClientsPage } from './pages/ClientPage/ClientsPage';
import { AllergensPage } from './pages/AllergensPage/AllergensPage';
import { FoodPage } from './pages/FoodPage/FoodPage';
import { CatPreferencesPage } from './pages/CatPreferencesPage/CatPreferencesPage';
import { GoodsPage } from './pages/GoodsPage/GoodsPage';


export const routes = (
    <Switch>
        <Route exact path="/"><Redirect to="/cats" /></Route>
        <Route exact path="/cats"><CatsPage /></Route>
        <Route exact path="/catBreeds"><BreedsPage /></Route>
        <Route exact path="/clients"><ClientsPage /></Route>
        <Route exact path="/food"><FoodPage /></Route>
        <Route exact path="/allergens"><AllergensPage /></Route>
        <Route exact path="/catPreferences"><CatPreferencesPage /></Route>
        <Route exact path="/goods"><GoodsPage /></Route>

        <Route>Not Found</Route>
    </Switch>
);
