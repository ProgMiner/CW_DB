import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';

import { useCats } from '../../hooks/useCats';
import { Cat } from '../../models/cat';
import { Food } from '../../models/food';


interface CatPreference {
    readonly cat: Cat;
    readonly food: Food;
}

const catColumn = ({ cat }: CatPreference) => `${cat.name} (${cat.id})`;
const foodColumn = ({ food }: CatPreference) => `${food.name} (${food.id})`;

const cnCatPreferencesPage = cn('CatPreferencesPage');

export const CatPreferencesTable: React.FC = () => {
    const cats = useCats();

    const catPreferences: CatPreference[] = cats?.flatMap(cat => cat.preferences.map(food => ({ cat, food }))) ?? [];

    return (
        <DataTable value={catPreferences} scrollable scrollHeight="350px"
                   className={cnCatPreferencesPage('Table', ['p-datatable-sm'])}>
            <Column body={catColumn} header="Кошка" />
            <Column body={foodColumn} header="Еда" />
        </DataTable>
    );
};
