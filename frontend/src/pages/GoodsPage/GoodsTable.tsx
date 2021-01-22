import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';

import { useGoods } from '../../hooks/useGoods';


const cnGoodsPage = cn('GoodsPage');

export const GoodsTable: React.FC = () => {
    const goods = useGoods();

    return (
        <DataTable className={cnGoodsPage('Table', ['p-datatable-sm'])} value={goods ?? []} paginator rows={10}>
            <Column field="id" header="#" headerStyle={{ width: '50px' }} />
            <Column field="name" header="Название" />
            <Column field="price" header="Стоимость" headerStyle={{ width: '100px' }} />
            <Column field="type" header="Тип" headerStyle={{ width: '200px' }} />

        </DataTable>
    );
};
