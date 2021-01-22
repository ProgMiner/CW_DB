import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';

import { useBreeds } from '../../hooks/useBreeds';


const cnBreedsPage = cn('BreedsPage');

export const BreedsTable: React.FC = () => {
    const breeds = useBreeds();

    return (
        <DataTable value={breeds ?? []} className={cnBreedsPage('Table', ['p-datatable-sm'])} paginator rows={10}>
            <Column field="id" header="#" headerStyle={{ width: '100px' }} />
            <Column field="name" header="Название" />
            <Column field="price" header="Стоимость" headerStyle={{ width: '200px' }} />
        </DataTable>
    );
};
