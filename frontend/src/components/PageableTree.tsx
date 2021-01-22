import React, { useCallback, useState } from 'react';
import { PageState, Paginator } from 'primereact/paginator';
import { Tree } from 'primereact/tree';
import TreeNode from 'primereact/components/treenode/TreeNode';


export interface PageableTreeProps {
    treeClassName?: string;
    paginatorClassName?: string;

    rows: number;
    pageLinkSize?: number;
    value?: TreeNode[];
}

export const PageableTree: React.FC<PageableTreeProps> = ({ treeClassName, paginatorClassName, rows, value, pageLinkSize }) => {
    const [first, setFirst] = useState(0);

    const onPageChange = useCallback(
        ({ first }: PageState) => setFirst(first),
        []
    );

    const page = value?.slice(first, first + rows);

    return (
        <>
            <Tree className={treeClassName} value={page} />

            <Paginator className={paginatorClassName} pageLinkSize={pageLinkSize}
                       rows={rows} totalRecords={value?.length}
                       first={first} onPageChange={onPageChange} />
        </>
    );
};
