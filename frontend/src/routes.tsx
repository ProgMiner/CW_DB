import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CatsPage } from './pages/CatsPage/CatsPage';


export const routes = (
    <Switch>
        <Route exact path="/"><Redirect to="/cats" /></Route>
        <Route exact path="/cats"><CatsPage /></Route>

        <Route>Not Found</Route>
    </Switch>
);
