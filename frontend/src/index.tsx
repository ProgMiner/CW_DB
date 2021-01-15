import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';
import { routes } from './routes';

import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './index.css';


ReactDOM.render(
    <React.StrictMode><App routes={routes} /></React.StrictMode>,
    document.getElementById('root')
);
