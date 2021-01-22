import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';
import { VerticalFormTablePanel } from '../../components/VerticalFormTablePanel/VerticalFormTablePanel';
import { FoodForm } from './FoodForm';
import { FoodTable } from './FoodTable';

import './FoodPage.css';


const cnFoodPage = cn('FoodPage');

export const FoodPage: React.FC = () => (
    <Page className={cnFoodPage()} title="Еда">
        <MainLayout className={cnFoodPage('Layout')}>
            <VerticalFormTablePanel
                form={(
                    <div className={cnFoodPage('FormContainer')}>
                        <FoodForm />
                    </div>
                )}
                table={<FoodTable />}
            />
        </MainLayout>
    </Page>
);
