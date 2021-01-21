import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { cn } from '@bem-react/classname';
import { useFood } from '../../hooks/useFood';
import { Food } from '../../models/food';


const goodColumn = (food: Food) => food.good?.id || '-';

const cnBreedsPage = cn('BreedsPage');

export const FoodTable: React.FC = () => {
    const { food } = useFood();

    return (
        <DataTable value={food ?? []} scrollable scrollHeight="350px" className={cnBreedsPage('Table', ['p-datatable-sm'])}>
            <Column field="id" header="#" />
            <Column field="name" header="Название" />
            <Column body={goodColumn} header="ид товра" />
        </DataTable>
    );
};
