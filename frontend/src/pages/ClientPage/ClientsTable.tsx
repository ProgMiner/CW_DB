import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';

import { useClients } from '../../hooks/useClients';


const cnClientsPage = cn('ClientsPage');

export const ClientsTable: React.FC = () => {
    const clients = useClients();

    return (
        <DataTable value={clients ?? []} className={cnClientsPage('Table', ['p-datatable-sm'])}>
            <Column field="id" header="#" />
            <Column field="name" header="Название" />
            <Column field="discount" header="Размер скидки" />
        </DataTable>
    );
};
