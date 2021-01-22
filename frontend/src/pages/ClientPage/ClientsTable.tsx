import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';

import { useClients } from '../../hooks/useClients';
import { Client } from '../../models/client';


const cnClientsPage = cn('ClientsPage');

const discountColumn = (client: Client) => `${(client.discount * 100).toLocaleString()} %`;

export const ClientsTable: React.FC = () => {
    const clients = useClients();

    return (

        <DataTable className={cnClientsPage('Table', ['p-datatable-sm'])} value={clients ?? []} paginator rows={10}>
            <Column field="id" header="#" headerStyle={{ width: '100px' }} />
            <Column field="name" header="Название" />
            <Column body={discountColumn} header="Размер скидки" headerStyle={{ width: '150px' }} />
        </DataTable>
    );
};
