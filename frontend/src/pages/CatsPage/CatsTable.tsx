import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { useCats } from '../../hooks/useCats';
import { Cat } from '../../models/cat';
import { cn } from '@bem-react/classname';


const breedColumn = (cat: Cat) => cat.breed?.name || '-';
const birthdayColumn = (cat: Cat) => cat.birthday?.toLocaleDateString()
const colorColumn = (cat: Cat) => (
    <div style={{
        width: '20px',
        height: '20px',
        background: '#' + (`000000${cat.color.toString(16)}`).slice(-6)
    }} />
);
const ownerColumn = (cat: Cat) => cat.owner?.name || '-';

const cnCatsPage = cn('CatsPage');

export const CatsTable: React.FC = () => {
    const cats = useCats();

    return (
        <DataTable value={cats ?? []} className={cnCatsPage('Table', ['p-datatable-sm'])}>
            <Column field="id" header="#" />
            <Column field="name" header="Имя" />
            <Column body={breedColumn} header="Порода" />
            <Column body={birthdayColumn} header="День рождения" headerStyle={{ width: '150px' }} />
            <Column field="sex" header="Пол" />
            <Column body={colorColumn} header="Цвет" />
            <Column body={ownerColumn} header="Хозяин" />
        </DataTable>
    );
};
