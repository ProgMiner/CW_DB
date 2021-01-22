import React, { useState } from 'react';
import { cn } from '@bem-react/classname';
import { Tree } from 'primereact/tree';
import TreeNode from 'primereact/components/treenode/TreeNode';
import { Paginator } from 'primereact/paginator';

import { useCats } from '../../hooks/useCats';


const cnCatPreferencesPage = cn('CatPreferencesPage');

export const CatPreferencesTable: React.FC = () => {
    const [first, setFirst] = useState(0);

    const cats = useCats();

    const catTree: TreeNode[] = cats?.slice(first, first+10).map(cat => ({ key: cat.id, label: `${cat.name} (${cat.id})`, children: cat.preferences.map(food => ({ key: food.id, label: `${food.name} (${food.id})`, children:[] })) }))  ?? [];

    const onPageChange = (event: { first: React.SetStateAction<number>; rows: React.SetStateAction<number>; }) => {
        setFirst(event.first);
    };

    return (
        <div>
        <Paginator first={first} rows={10} totalRecords={cats?.length} onPageChange={onPageChange}>
        </Paginator>

        <Tree value={catTree}
              className={cnCatPreferencesPage('', ['p-datatable-sm'])} >
        </Tree>
        </div>
    );
};
