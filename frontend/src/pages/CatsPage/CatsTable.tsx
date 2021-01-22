import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cn } from '@bem-react/classname';

import { useCats } from '../../hooks/useCats';
import { Cat } from '../../models/cat';


const cnCatsPage = cn('CatsPage');

const breedColumn = (cat: Cat) => cat.breed?.name ?? 'без породы';
const birthdayColumn = (cat: Cat) => cat.birthday?.toLocaleDateString() ?? 'неизвестно';
const sexColumn = (cat: Cat) => (
    <div className={cnCatsPage('SexIcon', { [cat.sex.toLowerCase()]: true })}/>
);
const colorColumn = (cat: Cat) => (
    <div className={cnCatsPage('Color')}
         style={{ background: '#' + (`000000${cat.color.toString(16)}`).slice(-6) }} />
);
const ownerColumn = (cat: Cat) => cat.owner?.name ?? 'нет';

export const CatsTable: React.FC = () => {
    const cats = useCats();

    return (
        <DataTable className={cnCatsPage('Table', ['p-datatable-sm'])}
                   value={cats ?? []} paginator rows={10}>
            <Column field="id" header="#" headerStyle={{ width: '50px' }} />
            <Column field="name" header="Имя" headerStyle={{ width: '150px' }} />
            <Column body={breedColumn} header="Порода" headerStyle={{ width: '150px' }} />
            <Column body={birthdayColumn} header="День рождения" headerStyle={{ width: '150px' }} />
            <Column body={sexColumn} header="Пол" headerStyle={{ width: '50px' }} />
            <Column body={colorColumn} header="Цвет" headerStyle={{ width: '50px' }} />
            <Column body={ownerColumn} header="Хозяин" />
        </DataTable>
    );
};
