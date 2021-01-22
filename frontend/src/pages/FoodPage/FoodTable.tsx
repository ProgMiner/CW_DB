import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabPanel, TabView } from 'primereact/tabview';
import { cn } from '@bem-react/classname';
import TreeNode from 'primereact/components/treenode/TreeNode';
import { Tree } from 'primereact/tree';
import { Paginator } from 'primereact/paginator';

import { useFood } from '../../hooks/useFood';
import { Food } from '../../models/food';



const goodColumn = (food: Food) => food.good?.id || '-';

const cnFoodPage = cn('FoodPage');

export const FoodTable: React.FC = () => {
    const food = useFood();
    const [first, setFirst] = useState(0);

    const onPageChange = (event: { first: React.SetStateAction<number>; rows: React.SetStateAction<number>; }) => {
        setFirst(event.first);
    };

    const foodTree: TreeNode[] = food?.slice(first, first+10).map(food => ({ key: food.id, label: `${food.name} (${food.id})`, children: food.allergens.map(allergen => ({ key: allergen.id, label: `${allergen.name} (${allergen.id})`,  children:[] })) }))  ?? [];


    return (

        <TabView>
            <TabPanel header="Еда">
                <DataTable value={food ?? []} scrollable scrollHeight="350px" className={cnFoodPage('Table', ['p-datatable-sm'])} paginator rows={10}>
                    <Column field="id" header="#" />
                    <Column field="name" header="Название" />
                    <Column body={goodColumn} header="ид товра" />
                </DataTable>

            </TabPanel>
            <TabPanel header="Аллергены в еде">
                <Paginator first={first} rows={10} totalRecords={food?.length} onPageChange={onPageChange}>
                </Paginator>
                <Tree value={foodTree}
                      className={cnFoodPage('Table', ['p-datatable-sm'])}>
                </Tree>
            </TabPanel>

        </TabView>

    );
};
