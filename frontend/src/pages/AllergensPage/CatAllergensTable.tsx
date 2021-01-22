import React from 'react';
import TreeNode from 'primereact/components/treenode/TreeNode';

import { useCats } from '../../hooks/useCats';
import { PageableTree } from '../../components/PageableTree';


export const CatAllergensTable: React.FC = () => {
    const cats = useCats();

    const allergenTree: TreeNode[] | undefined = cats
        ?.map(({ id, name, allergens }) => ({
            key: id,
            label: `${name} (${id})`,
            children: allergens.map(({ id, name }) => ({
                key: id,
                label: `${name} (${id})`,
                children: []
            }))
        }));

    return (
        <PageableTree rows={10} pageLinkSize={3} value={allergenTree} />
    );
};
