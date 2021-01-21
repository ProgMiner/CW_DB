import React from 'react';
import { cn } from '@bem-react/classname';

import { VerticalFormTablePanel } from '../../components/VerticalFormTablePanel/VerticalFormTablePanel';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';
import { AllergenForm } from './AllergenForm';
import { AllergensTable } from './AllergensTable';

import './AllergensPage.css';


const cnAllergensPage = cn('AllergensPage');

export const AllergensPage: React.FC = () => (
    <Page className={cnAllergensPage()} title="Аллергены">
        <MainLayout className={cnAllergensPage('Layout')}>
            <VerticalFormTablePanel
                form={(
                    <div className={cnAllergensPage('FormContainer')}>
                        <AllergenForm />
                    </div>
                )}
                table={<AllergensTable />}
            />
        </MainLayout>
    </Page>
);
