import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { useBreeds } from '../../hooks/useBreeds';
import { cn } from '@bem-react/classname';


const cnBreedsPage = cn('BreedsPage');

export const BreedsTable: React.FC = () => {
    const { breeds } = useBreeds();

    return (
        <DataTable value={breeds} scrollable scrollHeight="350px" className={cnBreedsPage("Table", ['p-datatable-sm'])}>
            <Column field="id" header="#" />
            <Column field="name" header="Название" />
            <Column field="price" header="Стоимость" />
        </DataTable>
    );
};
