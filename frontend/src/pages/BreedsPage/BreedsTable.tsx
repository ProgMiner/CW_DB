import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';

import { useBreeds } from '../../hooks/useBreeds';


const cnBreedsPage = cn('BreedsPage');

export const BreedsTable: React.FC = () => {
    const breeds = useBreeds();

    return (
        <DataTable value={breeds ?? []} className={cnBreedsPage('Table', ['p-datatable-sm'])}>
            <Column field="id" header="#" />
            <Column field="name" header="Название" />
            <Column field="price" header="Стоимость" />
        </DataTable>
    );
};
