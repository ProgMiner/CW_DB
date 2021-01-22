import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabPanel, TabView } from 'primereact/tabview';
import { cn } from '@bem-react/classname';
import TreeNode from 'primereact/components/treenode/TreeNode';

import { useFood } from '../../hooks/useFood';
import { Food } from '../../models/food';
import { PageableTree } from '../../components/PageableTree';


const goodColumn = ({ good }: Food) => good ? `${good.name} (#${good?.id})` : 'нет';

const cnFoodPage = cn('FoodPage');

export const FoodTable: React.FC = () => {
    const food = useFood();

    const foodTree: TreeNode[] | undefined = food
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
        <TabView>
            <TabPanel header="Еда">
                <DataTable className={cnFoodPage('Table', ['p-datatable-sm'])} value={food ?? []} paginator rows={10}>
                    <Column field="id" header="#" headerStyle={{ width: '50px' }} />
                    <Column field="name" header="Название" />
                    <Column body={goodColumn} header="Товар" />
                </DataTable>
            </TabPanel>

            <TabPanel header="Аллергены в еде">
                <PageableTree rows={10} value={foodTree} />
            </TabPanel>
        </TabView>
    );
};
