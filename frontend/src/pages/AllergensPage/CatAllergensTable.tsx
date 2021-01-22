import React, { useState } from 'react';
import { cn } from '@bem-react/classname';
import TreeNode from 'primereact/components/treenode/TreeNode';
import { Tree } from 'primereact/tree';
import { Paginator } from 'primereact/paginator';

import { useCats } from '../../hooks/useCats';


const cnAllergensPage = cn('AllergensPage');

export const CatAllergensTable: React.FC = () => {
    const [first, setFirst] = useState(0);

    const onPageChange = (event: { first: React.SetStateAction<number>; rows: React.SetStateAction<number>; }) => {
        setFirst(event.first);
    };

    const cats = useCats();
    const allergenTree: TreeNode[] = cats?.slice(first, first+10).map(cat => ({ key: cat.id, label: `${cat.name} (${cat.id})`, children: cat.allergens.map(allergen => ({ key: allergen.id, label: `${allergen.name} (${allergen.id})`, children:[] })) }))  ?? [];

    return (
        <Paginator first={first} rows={10} totalRecords={cats?.length} onPageChange={onPageChange}>
        <Tree value={allergenTree}
              className={cnAllergensPage('Table', ['p-datatable-sm'])}>
        </Tree>
        </Paginator>
    );

};
