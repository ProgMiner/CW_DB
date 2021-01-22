import React from 'react';
import TreeNode from 'primereact/components/treenode/TreeNode';

import { useCats } from '../../hooks/useCats';
import { PageableTree } from '../../components/PageableTree';


export const CatPreferencesTable: React.FC = () => {
    const cats = useCats();

    const catTree: TreeNode[] | undefined = cats
        ?.map(({ id, name, preferences }) => ({
            key: id,
            label: `${name} (${id})`,
            children: preferences.map(({ id, name }) => ({
                key: id,
                label: `${name} (${id})`,
                children: []
            }))
        }));

    return (
        <PageableTree rows={10} value={catTree} />
    );
};
