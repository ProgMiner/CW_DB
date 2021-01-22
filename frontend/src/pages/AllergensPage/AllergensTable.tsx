import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';


import { useAllergens } from '../../hooks/useAllergens';


const cnAllergensPage = cn('AllergensPage');

export const AllergensTable: React.FC = () => {
    const allergens = useAllergens();

    return (
        <DataTable className={cnAllergensPage('Table', ['p-datatable-sm'])}
                   paginator rows={10} pageLinkSize={30} value={allergens ?? []}>
            <Column field="id" header="#" headerStyle={{ width: '100px' }} />
            <Column field="name" header="Наименование" />
        </DataTable>
    );
};
