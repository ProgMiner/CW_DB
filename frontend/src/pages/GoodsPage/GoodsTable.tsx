import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { useBreeds } from '../../hooks/useBreeds';
import { cn } from '@bem-react/classname';
import {useGoods} from "../../hooks/useGoods";


const cnGoodsPage = cn('GoodsPage');

export const GoodsTable: React.FC = () => {
    const { goods } = useGoods();

    return (
        <DataTable value={goods} scrollable scrollHeight="350px" className={cnGoodsPage("Table", ['p-datatable-sm'])}>
            <Column field="id" header="#" />
            <Column field="name" header="Название" />
            <Column field="price" header="Стоимость" />
            <Column field="type" header="Тип" />

        </DataTable>
    );
};