import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';

import { useAllergens } from '../../hooks/useAllergens';


const cnAllergensPage = cn('AllergensPage');

export const AllergensTable: React.FC = () => {
    const allergens  = useAllergens();

    return (
        <DataTable value={allergens ?? []} className={cnAllergensPage('Table', ['p-datatable-sm'])}>
            <Column field="id" header="#" />
            <Column field="name" header="Название" />
        </DataTable>
    );
};
