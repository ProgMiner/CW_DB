import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { cn } from '@bem-react/classname';
import {useCatPreferences} from "../../hooks/useCatPreferences";


const cnCatPreferencesPage = cn('CatPreferencesPage');

export const CatPreferencesTable: React.FC = () => {
    const { catPreferences } = useCatPreferences();

    return (
        <DataTable value={catPreferences} scrollable scrollHeight="350px" className={cnCatPreferencesPage("Table", ['p-datatable-sm'])}>
            <Column field="cat.id" header="Ид_кошки" />
            <Column field="food.id" header="Ид_еды" />
        </DataTable>
    );
};
