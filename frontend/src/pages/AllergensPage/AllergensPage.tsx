import React from 'react';
import { cn } from '@bem-react/classname';


import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';
import { AllergenForm } from './AllergenForm';
import { AllergensTable } from './AllergensTable';
import { FormTablePanel } from '../../components/FormTablePanel/FormTablePanel';
import { CatAllergenForm } from './CatAllergenForm';
import { CatAllergensTable } from './CatAllergensTable';

import './AllergensPage.css';


const cnAllergensPage = cn('AllergensPage');

export const AllergensPage: React.FC = () => (
    <Page className={cnAllergensPage()} title="Аллергены">
        <MainLayout className={cnAllergensPage('Layout')}>
            <FormTablePanel className={cnAllergensPage('AllergensPanel')}
                            form={<AllergenForm/>} table={<AllergensTable/>} />

            <FormTablePanel form={<CatAllergenForm/>} table={<CatAllergensTable/>} />
        </MainLayout>
    </Page>
);
