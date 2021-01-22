import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';

import { useClients } from '../../hooks/useClients';


const cnClientsPage = cn('ClientsPage');

export const ClientsTable: React.FC = () => {
    const clients = useClients();

    return (
        <DataTable className={cnClientsPage('Table', ['p-datatable-sm'])} value={clients ?? []} paginator rows={10}>
            <Column field="id" header="#" headerStyle={{ width: '100px' }} />
            <Column field="name" header="Название" />
            <Column field="discount" header="Размер скидки" headerStyle={{ width: '150px' }} />
        </DataTable>
    );
};
